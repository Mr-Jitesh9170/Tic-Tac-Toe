exports.ticTackToeSocket = (io) => {
    io.on("connection", (socket) => {
        socket.on("gameJoin", async ({ userId, regenratedId }) => {

        })

        socket.on("gameLeave", (roomNumber) => {
            socket.leave(roomNumber);
        })
        socket.on("disconnect", async () => {
            console.log("socket disconnect!")
        });
    });
}
