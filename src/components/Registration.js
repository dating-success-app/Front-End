import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';


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
        <Container maxWidth="sm">
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