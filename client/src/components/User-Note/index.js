import React from 'react';
import "./style.css";
import { Link } from 'react-router-dom';

const UserNote = () => {
    return (

        <div className="userNoteWrapper">
            <header className="headerDiv">
                <Link to="/"><h2 className="appTitleInDashbored">Note Reminder</h2></Link>
                <nav>
                    <ul className="logoutContainer">
                        <li className="logoutBtn">Logout</li>
                    </ul>
                </nav>
            </header>
        </div>
    )
};

export default UserNote
