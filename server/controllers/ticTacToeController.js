exports.ticTackToeSocket = (io) => {
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
}
