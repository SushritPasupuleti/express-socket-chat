import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import SocketContext from './context/socket';
const ENDPOINT = "http://localhost:5000";

function App() {
  const [response, setResponse] = useState("");
  const [message, setMessage] = useState("");

  const socket = socketIOClient(ENDPOINT);
  socket.on("sendMessage", data => {
    setResponse(data);
  });
  // useEffect(() => {
  // }, []);

  return (
    <SocketContext.Provider value={socket}>
      <p>
        It's <time dateTime={response}>{response}</time>
      </p>
    </SocketContext.Provider>
  );
}

export default App;