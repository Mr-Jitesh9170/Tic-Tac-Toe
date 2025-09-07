exports.ticTackToeSocket = (io) => {
    io.on("connection", (socket) => {
        socket.on("gameJoin", async ({ gameRoomId }) => {
            socket.join(gameRoomId)
        })
        socket.on("joinedPlayesLists", async ({ userId, gameRoomId }) => {
            console.log(userId, typeof gameRoomId, gameRoomId, "<--- userId gameRoomId")
            io.to(gameRoomId).emit("joinedPlayesLists", {
                userId,
                gameRoomId
            });
            const room = io.sockets.adapter.rooms.get(gameRoomId);
            console.log(room, "<----number of users")
        })
        socket.on("gameLeave", ({ gameRoomId }) => {
            socket.leave(gameRoomId);
        })
    });
}
