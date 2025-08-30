const express = require("express")
const { Server } = require("socket.io");
const { createServer } = require("http");
const app = express()
const server = createServer(app);
const cors = require("cors")
const { ticTackToeSocket } = require("./controllers/ticTacToeController")

app.use(cors({ origin: "http://localhost:5173" }))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.get("/", (req, res) => {
    res.send("helo world")
})
let io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
    }
});

io.on("connection", (socket) => {
    console.log("socket connected!", socket.id)
    socket.on("gameJoin", async (gameId) => {
        socket.join(gameId);
    })

    socket.on("gameLeave", (roomNumber) => {
        socket.leave(roomNumber);
    })
    socket.on("disconnect", async () => {
        console.log("socket disconnect!")
    });
});





// ticTackToeSocket(io)
const port = 8080 || process.env.PORT
app.listen(port, () => {
    console.log("Server is running at -> ", port)
})