var rabbit = require('amqplib/callback_api')
import pino from 'pino'

require('dotenv').config()

const LOGGER = pino({ level: process.env.LOG_LEVEL || 'info' })

const queues = ['userLogin', 'frontendMessage']

LOGGER.info('Starting rabbitmq connection')

rabbit.connect(process.env.RABBITMQ_URL, (err0, connection) => {
    if (err0) throw err0

    LOGGER.info('Creating default channel on default exchange')
    connection.createChannel((error, channel) => {
        if (error) throw error

        rabbit.channel = channel

        LOGGER.info('Creating queues on channel')

        queues.forEach(queue => {
            channel.assertQueue(queue, { durable: false })
            LOGGER.info(`Created ${queue} on channel`)
        })

        channel.send = (queue, message) => {
            channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)))
        }

        LOGGER.info('Attaching consumers...')

        channel.consume('userLogin', event => {
            onUserLogin(JSON.parse(event.content.toString()));
        }, { noAck: true })

        LOGGER.info('All consumers ready')
    })
})

async function onUserLogin(event) {
    LOGGER.debug(event)

    LOGGER.debug(`Sending login response`)

    let response = {
        type: 'LoginResponse',
        res: 'User logged in',
        socketId: event.socketId
    }

    rabbit.channel.send('frontendMessage', response)
}