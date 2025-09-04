const express = require("express")
const { Server } = require("socket.io");
const { createServer } = require("http");
const { mongoConnect } = require("./config/db")
const app = express()
const server = createServer(app);
const cors = require("cors")
const { ticTackToeSocket } = require("./controllers/ticTacToeController")

app.use(cors({ origin: "http://localhost:5173" }))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
mongoConnect() 

let io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
    },
});

ticTackToeSocket(io)
const port = 8080 || process.env.PORT
server.listen(port, () => {
    console.log("Server is running at -> ", port)
})