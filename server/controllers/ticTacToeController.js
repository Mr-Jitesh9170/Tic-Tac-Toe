exports.ticTackToeSocket = (io) => {
    io.on("connection", (socket) => {
        console.log("socket connected -> ", socket.id)
        socket.on("gameJoin", async ({ gameRoomId }) => {
            socket.join(gameRoomId)
            socket.gameRoomId = gameRoomId
        })
        socket.on("joinedPlayesLists", async (palyerdetail) => {
            io.to(socket.gameRoomId).emit("joinedPlayesLists", palyerdetail);
            const room = io.sockets.adapter.rooms.get(socket.gameRoomId);
            console.log("Room Members-> ", room)
        })
        socket.on("playing", () => {

        })
        socket.on("disconnect", async () => {
            console.log("socket disconnected ->", socket.id)
        });
    });
}