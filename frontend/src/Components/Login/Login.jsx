// import React from "react";

// import './Login.css';

// import email_icon from '../Assest/email.png'
// import password_icon from '../Assest/password.png'


// const Login = () => {
//     return (
//         <div className='container'>
//             <div className='header'>
//                 <div className="text">Login Up</div>
//                 <div className="underline"></div>
//             </div>
//             <div className="inputs">
//                 <div className="input">
//                     <img src={email_icon} alt="" />
//                     <input type="email" placeholder="Email" />
//                 </div>
//                 <div className="input">
//                     <img src={password_icon} alt="" />
//                     <input type="password" placeholder="Password"/>
//                 </div>
//                 <div className="submit-container">
//                     <div className="submit"> Send </div>
//                 </div>
//             </div>
//             <din className="forgot-password"> Forgot Password ? </din>
//             <din className="forgot-password"> already have account ? </din>
//         </div>
//     )
// }

// export default Login;

import React, { useState } from "react";
import './Login.css';

import email_icon from '../Assest/email.png'
import password_icon from '../Assest/password.png'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = () => {
        // Do something with the email and password, for example, send them to a server
        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <div className='container'>
            <div className='header'>
                <div className="text">Login Up</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input id = "field" type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input id = "field" type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                </div>
                <div className="submit-container">
                    <div className="submit" onClick={handleSubmit}> Send </div>
                </div>
            </div>
            <div className="forgot-password"> Forgot Password ? </div>
            <div className="forgot-password"> already have account ? </div>
        </div>
    )
}

export default Login;
