import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import SendIcon from '@material-ui/icons/Send';

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
        
    }

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <OutlinedInput id="filled-basic" label="Message" variant="filled" endAdornment={
                <InputAdornment position="end">
                    <SendIcon
                        aria-label="toggle password visibility"
                        onClick={() => sendMessage()}
                    >
                    </SendIcon>
                </InputAdornment>
            } />
        </form>
    );
}

export default Messenger;