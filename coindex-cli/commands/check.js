const colors = require('colors')
const KeyManager = require('../lib/KeyManager')
const CryptoApi = require('../lib/CryptoApi')

const check = {
    async price(cmd) {
        try {
            const keyManager = new KeyManager()
            const key = keyManager.getKey();

            const api = new CryptoApi(key)

            const priceOutputData = await api.getPriceData(cmd.coin, cmd.curr)

            console.log(priceOutputData)
        } catch (error) {
            console.error(error.message.red)
        }
    }
}

module.exports = check