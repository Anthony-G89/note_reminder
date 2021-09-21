/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.css";
import { Link } from "react-router-dom";


const Description = () => {
    return (
        <div className="descriptionWrapper">
            <div className="descriptionContainer">
                <h2 className="descriptionTitle"> Welcome to Note Reminder!</h2>
                <p className="decriptionText">If you're someone that have a lot of things going on your life and sometimes forget certain things, will this application is for you. Note Reminder will let you create, read, update and delete a note. All you have to do is register and start adding your notes.</p>
            </div>
            <div className="linksContainer">
                 <Link to="/register"><a className="registerLink links" href="/register">Register</a></Link>
                 <Link to="/login"><a className="loginLink links" href="/login">Log In</a></Link>
            </div>
        </div>
    )
};


export default Description;