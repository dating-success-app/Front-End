import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    '@global': {
      body: {
        // backgroundImage: `url(${Background})`
      },
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'whitesmoke',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

const RegistrationForm = (props) => {

    const [userInfo, setUserInfo] = useState({
        username: "",
        password: ""
    })

    const handleChange = event => {
        setUserInfo({...userInfo, [event.target.name]: event.target.value})
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(userInfo);
        axios.post('https://dating-success.herokuapp.com/api/auth/register', userInfo)
            .then(response => { 
                console.log(response.data)
                props.history.push('/signin');
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <Container component="main" maxWidth="sm">
            <Paper>
                <form onSubmit={handleSubmit}>
                    <label>
                        <TextField
                            type="text"
                            name="username"
                            label="User Name"
                            onChange={event => handleChange(event)}
                        />
                    </label>
                    <label>
                        <TextField 
                            type="password"
                            name="password"
                            label="Password"
                            onChange={event => handleChange(event)}
                        />
                    </label>
                    <button>Create Account</button>
                </form>
            </Paper>
        </Container>
    )
}

export default RegistrationForm;

//First Name //Last Name
//Mobile Number or Email
//Password
//Birthday
//Gender

//refactor using custom hooks
//add yup formik
//form validation