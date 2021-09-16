import React from "react";
import "./style.css";



const NavBar = () => {
    return (
        <header className="navWrapper">
            <h2 className="appTitle">Note Reminder</h2>
            <nav className="navContainer">
                <ul className="list-items">
                    <li className="nav-links">Register</li>
                    <li className="nav-links">Log in</li>
                </ul>
            </nav>

        </header>
    )
};


export default NavBar;

