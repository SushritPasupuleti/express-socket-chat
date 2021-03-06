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

  // useEffect(() => {
  // }, []);

  return (
    <ThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Messenger></Messenger>
            <p>Server Says: {response}</p>
          </header>
        </div>
    </ThemeProvider>
  );
}

export default App;