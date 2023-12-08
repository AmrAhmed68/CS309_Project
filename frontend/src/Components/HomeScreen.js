// HomeScreen.js
import React from 'react';
import { Link } from 'react-router-dom';
import "../Components/Login/Login.css"
import Product from './product';
// import Home from './Home';
// import Search from './Search';
// import './master.css';
// import './Normalize.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { NavBar } from './NavBar/NavBar';

function HomeScreen() {
  
  return (
   <>
    <div>

      {/* <Search /> */}
      {/* <Home /> */}
        {/* <Link to="/login">
            <button className='IN'>Login</button>
        </Link>
        <Link to="/signIn">
            <button className='OUT'>Sign In</button>
        </Link> */}
       
        {/* <NavBar /> */}
        <Product/>
    </div>
    </>
  );
}

export default HomeScreen;
