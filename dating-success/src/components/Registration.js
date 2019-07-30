import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';




const RegistrationForm = () => {

    // const [userInfo, setUserInfo] = useState({
    //     firstName: "",
    //     lastName: "",
    //     email: "",
    //     password: "",
    //     birthday: "",
    //     gender: ""
    // })

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
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <Container maxWidth="sm">
        <Paper>
            <form onSubmit={handleSubmit}>
                {/* <label>
                    <TextField
                        type="text"
                        name="firstName"
                        label="First Name"
                        onChange={event => handleChange(event)}
                    />
                </label> */}
                {/* <label>
                    <TextField 
                        type="text"
                        name="lastName"
                        label="Last Name"
                        onChange={event => handleChange(event)}
                    />
                </label> */}
                {/* <label>
                    <TextField 
                        type="email"
                        name="email"
                        label="Email"
                        onChange={event => handleChange(event)}
                    />
                </label> */}
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
                {/* <label>
                    <TextField 
                        type="date"
                        name="birthday"
                        label="Birthday"
                        defaultValue="1988-02-14"
                        onChange={event => handleChange(event)}
                    />
                </label> */}
                {/* <label>
                    <RadioGroup>
                        <FormLabel component="legend">Gender</FormLabel>
                        <FormControlLabel
                            control={<Radio color="primary" />}
                            name="gender"
                            value="male"
                            label="male"
                            onChange={event => handleChange(event)}
                            labelPlacement="start"
                        />
                        <FormControlLabel
                            control={<Radio color="primary" />}
                            name="gender"
                            value="female"
                            label="female"
                            onChange={event => handleChange(event)}
                            labelPlacement="start"
                        />
                        <FormControlLabel
                            control={<Radio color="primary" />}
                            name="gender"
                            value="other"
                            label="other"
                            onChange={event => handleChange(event)}
                            labelPlacement="start"
                        />
                    </RadioGroup>
                </label> */}

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