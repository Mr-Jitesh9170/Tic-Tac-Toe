const { Schema, model } = require("mongoose")

const gameRoom = new Schema(
    {
        gameRoomId: {
            type: String,
            require: true,
            unique: true,
            index: true
        },
        players: {
            type: [
                {
                    userId: {
                        type: String,
                    }
                }
            ]
        }
    }
)

module.exports = model("gameRoom", gameRoom, "gameRoom")