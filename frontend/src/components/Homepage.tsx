import React from "react";
import logo from '../assets/images/logo.png';
import './Homepage.css';

const Homepage = () => {
  return(
  <div className="homepage">
    <h1>Welcome to</h1>
    <img src={logo} className="logo" />
  </div>
  )
};

export default Homepage;
