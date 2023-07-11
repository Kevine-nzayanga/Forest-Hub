import React, { useState } from "react";
import "./style.css";
// import { Link } from "react-router-dom";

const NavBar = ()=>{
    const[isOpen,setisOpen]= useState(false);
    return(
        <div className="nav">
          <span> <img className="logo" src="https://res.cloudinary.com/dtu8pkzkp/image/upload/v1688906288/EDU_HUB__1_-removebg-preview_xq5l6y.png" alt="galaxy hub logo"></img></span> 
        <div className={`nav-items ${isOpen && "open"}`}>
            <a href="/home">Home</a>
            <a href="/planets">Planet</a>
            <a href="/contact">Contact</a>
            </div>
         
         <div className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setisOpen(!isOpen)}>
            <div className="bar"></div>
         </div>
        </div>
    );
};

export default NavBar;