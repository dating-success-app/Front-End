import React, { useState, useEffect } from 'react';

const Registration = () => {

    const [userInfo, setUserInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        birthday: "",
        gender: ""
    })

    const handleChange = event => {
        setUserInfo({...userInfo, [event.target.name]: event.target.value})
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(userInfo);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input 
                        type="text"
                        name="firstName"
                        onChange={event => handleChange(event)}
                    />
                </label>
                <label>
                    Last Name:
                    <input 
                        type="text"
                        name="lastName"
                        onChange={event => handleChange(event)}
                    />
                </label>
                <label>
                    Email:
                    <input 
                        type="email"
                        name="email"
                        onChange={event => handleChange(event)}
                    />
                </label>
                <label>
                    Password:
                    <input 
                        type="password"
                        name="password"
                        onChange={event => handleChange(event)}
                    />
                </label>
                <label>
                    Birthday:
                    <input 
                        type="date"
                        name="birthday"
                        onChange={event => handleChange(event)}
                    />
                </label>
                <label>
                    Gender:
                    <input 
                        type="radio"
                        name="gender"
                        value="male"
                        onChange={event => handleChange(event)}
                    /> Male
                    <input 
                        type="radio"
                        name="gender"
                        value="female"
                        onChange={event => handleChange(event)}
                    /> Female
                    <input 
                        type="radio"
                        name="gender"
                        value="other"
                        onChange={event => handleChange(event)}
                    /> Other
                </label>

                <button>Create Account</button>
            </form>
        </>
    )
}

export default Registration;

//First Name //Last Name
//Mobile Number or Email
//Password
//Birthday
//Gender

//refactor using custom hooks