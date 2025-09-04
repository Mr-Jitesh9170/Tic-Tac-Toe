exports.ticTackToeSocket = (io) => {
    io.on("connection", (socket) => {
        socket.on("gameJoin", async ({ gameRoomId }) => {
            console.log(gameRoomId, "<--- Room joined")
            socket.join(gameRoomId)
        })

        socket.on("joinedPlayesLists", async ({ userId, gameRoomId }) => {
            console.log(userId, gameRoomId, "<--- Joined players")
            io.to(gameRoomId).emit("joinedPlayesLists", {
                userId,
                gameRoomId
            });
        })

        socket.on("gameLeave", ({ gameRoomId }) => {
            socket.leave(gameRoomId);
        })
        socket.on("disconnect", async () => {
            console.log("socket disconnect!")
        });
    });
}
