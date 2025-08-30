import { io } from "socket.io-client"
const socket = io("http://localhost:8080")

const useSocket = () => {
    socket.on("connect", () => {
        console.log("Connected with ID:", socket.id)
    })
    
    return { socket }
}

export default useSocket