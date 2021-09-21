import React from "react";
import "./style.css";
import { Link } from "react-router-dom";




const NavBar = () => {
    return (
        <header className="navWrapper">
            <Link to="/"><h2 className="appTitle">Note Reminder</h2></Link>
            <nav className="navContainer">
                <ul className="list-items">
                    <Link to="/register"><li className="nav-links">Register</li></Link>
                    <Link><li className="nav-links">Log in</li></Link>
                </ul>
            </nav>

        </header>
    )
};


export default NavBar;

