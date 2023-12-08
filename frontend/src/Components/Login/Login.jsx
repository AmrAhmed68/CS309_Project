// import React, { useState } from "react";
// import './Login.css';

// import email_icon from '../Assest/email.png'
// import password_icon from '../Assest/password.png'

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleEmailChange = (e) => {
//         setEmail(e.target.value);
//     };

//     const handlePasswordChange = (e) => {
//         setPassword(e.target.value);
//     };

//     const handleSubmit = () => {
//         // Do something with the email and password, for example, send them to a server
//         console.log("Email:", email);
//         console.log("Password:", password);
//     };

//     return (
//         <div className='container'>
//             <div className='header'>
//                 <div className="text">Login</div>
//                 <div className="underline"></div>
//             </div>
//             <div className="inputs">
//                 <div className="input">
//                     <img src={email_icon} alt="" />
//                     <input id = "field" type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
//                 </div>
//                 <div className="input">
//                     <img src={password_icon} alt="" />
//                     <input id = "field" type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
//                 </div>
//                 <div className="submit-container">
//                     <div className="submit" onClick={handleSubmit}> Send </div>
//                 </div>
//             </div>
//             <div className="forgot-password"> Forgot Password ? </div>
//             <div className="forgot-password"> already have account ? </div>
//         </div>
//     )
// }

// export default Login;
import React, { useState } from "react";
import './Login.css';
import axios from 'axios'; // Import Axios

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
        // Make a POST request to your backend API
        axios.post('your_backend_api/login', {
            email: email,
            password: password
        })
        .then(response => {
            // Handle the success response from the server
            console.log("Login successful:", response.data);
        })
        .catch(error => {
            // Handle errors
            console.error("Login failed:", error);
        });
    };

    return (
                <div className='Logcontainer'>
            <div className='Logheader'>
                <div className="Logtext">Login</div>
                <div className="Logunderline"></div>
            </div>
            <div className="Loginputs">
                <div className="Loginput">
                    <img src={email_icon} alt="" />
                    <input id = "field" type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
                </div>
                <div className="Loginput">
                    <img src={password_icon} alt="" />
                    <input id = "field" type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                </div>
                <div className="Logsubmit-container">
                    <div className="Logsubmit" onClick={handleSubmit}> Send </div>
                </div>
            </div>
            <div className="Logaccouunt" > You don't have an account ?  </div>
        </div>
    );
}

export default Login;
