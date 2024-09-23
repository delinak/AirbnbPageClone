import React from "react";
import ReactDOM from "react-dom";
import '../style.css';

function Navbar(){
    return(
        <div className="nav">
            <section className="nav-icon">
            <img src={`${process.env.PUBLIC_URL}/images/Airbnb_Logo.svg.png`} alt="" />
            </section>
            <img src={`${process.env.PUBLIC_URL}/images/Group 77.png`} alt="" className="photo_grid"/>
            <h1 className="hero_title">Online Experiences</h1>
            <p className="hero_content">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
        </div>
    );

}

export default Navbar;