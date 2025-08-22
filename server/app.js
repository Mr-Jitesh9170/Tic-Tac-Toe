require("dotenv").config();
const express = require("express")
const { Server } = require("socket.io");
const { createServer } = require("http");
const app = express() 
const server = createServer(app);
const cors = require("cors")


app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
  
let io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
    }
});

const port = 8080 || process.env.PORT
app.listen(port, () => {
    console.log("Server is running!")
})