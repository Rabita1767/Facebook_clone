const SocketGateway = (socket) => {
  socket.on("give_post_reaction", (data) => {
    console.log(data);
  });
};
export default SocketGateway;
