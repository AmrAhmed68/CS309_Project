// HomeScreen.js
import React from 'react';
import { Link } from 'react-router-dom';
import "../Components/Login/Login.css"
import Product from './product';
import Slider from './Slider';

function HomeScreen() {
  return (
    <div>
        <Link to="/login">
            <button className='IN'>Login</button>
        </Link>
        <Link to="/signIn">
            <button className='OUT'>Sign In</button>
        </Link>
        <Slider />
        <Product/>
    </div>
  );
}

export default HomeScreen;
