import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:5000";

const socket = socketIOClient(ENDPOINT);
  socket.on("sendMessage", data => {
    console.log("Sending Data to Server: ", data)
  });

  socket.on("recieveMessage", data => {
    console.log("Messsage from Server: ", data)
  });

export default socket;