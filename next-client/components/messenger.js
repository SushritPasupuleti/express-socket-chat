import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import SendIcon from '@material-ui/icons/Send';
import socket from '../socket/socket';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const Messenger = (props) => {

    const classes = useStyles();
    const [message, setMessage] = useState("");

    const sendMessage = () => {
        console.log(props, message)
        socket.emit('sendMessage', message);
    }

    return (
        // <h1>hi</h1>
        <form className={classes.root} noValidate autoComplete="off">
            <OutlinedInput id="filled-basic" label="Message" variant="filled" endAdornment={
                <InputAdornment position="end">
                    <SendIcon
                        aria-label="toggle password visibility"
                        onClick={() => sendMessage()}
                    >
                    </SendIcon>
                </InputAdornment>
            }
            onChange={(e) => setMessage(e.target.value)}
            />
        </form>
    )
}


export default Messenger;