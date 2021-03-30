import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import SocketContext from './context/socket';
import Messenger from './components/messenger';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
const ENDPOINT = "http://localhost:5000";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
    type: 'dark'
  },
});

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
    <ThemeProvider theme={theme}>
      <SocketContext.Provider value={socket}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Messenger></Messenger>
          </header>
        </div>
      </SocketContext.Provider>
    </ThemeProvider>
  );
}

export default App;