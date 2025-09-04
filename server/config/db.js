const mongoose = require("mongoose")

exports.mongoConnect = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/TicTacToe")
        console.log("database connected!")
    } catch (error) {
        console.log("database connected!")
    }
}