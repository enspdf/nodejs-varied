import SocketIOClient from 'socket.io-client'

let socket = SocketIOClient(process.env.REACT_APP_SOCKET_URL)

function withSocket(WrappedComponent) {
    const WithSocket = props => {
        const socketListen = async (queue, callback) => {
            socket.on(queue, data => {
                callback(data)
            })
        }

        const socketSend = async (queue, data) => {
            socket.emit(queue, JSON.stringify(data))
        }

        return (
            <WrappedComponent {...props} socketSend={socketSend} socketListen={socketListen} />
        )
    }

    return WithSocket
}

export default withSocket