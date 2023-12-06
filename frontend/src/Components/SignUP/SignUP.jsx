import React, { useState } from "react";
import './SignUP.css';

import user_icon from '../Assest/person.png'
import email_icon from '../Assest/email.png'
import password_icon from '../Assest/password.png'

const SignUP = () => {
    const [FirstName , setFirstName] = useState('');
    const [LastName , setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ConfirmPassword , setConfirmPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const checkEmailExistence = async (email) => {
        // Simulate checking email existence (replace with actual API call)
        return new Promise((resolve) => {
            setTimeout(() => {
                const emailExists = Math.random() > 0.5; // Simulating existence check
                resolve(emailExists);
            }, 1000);
        });
    };

    const handleSubmit = async () => {
        // Check if email exists
        const emailExists = await checkEmailExistence(email);

        if (emailExists) {
            console.log("Email already exists");
        } else {
            // Do something with the email and password, for example, send them to a server
            console.log("Email:", email);
            console.log("Password:", password);
            
        }
    };

    return (
        <div className='container'>
            <div className='header'>
                <div className="text">Sign Up</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder="First Name" value={FirstName} onChange={handleFirstNameChange} />
                </div>
                <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder="Last Name" value={LastName} onChange={handleLastNameChange}/>
                </div>
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder="Email" value={email} onChange={handleEmailChange}/>
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange}/>
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder="Confirm Password" value={ConfirmPassword} onChange={handleConfirmPasswordChange} />
                </div>
                <div className="submit-container">
                    <div className="submit" onClick={handleSubmit} > Send </div>
                </div>
            </div>
        </div>
    )
}

export default SignUP;