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

            <div className="noteContainer">
                <h2 className="userWelcomeMessage">Welcome Anthony! to Note Reminder</h2>
                <div className="row rowDiv">
                    <div className="col-6 titleAndBody">
                        <div className="titleAndInputContainer">
                            <label>Title</label>
                            <br />
                            <input id="noteTitle" />
                        </div>

                        <label>Body</label>
                        <textarea id="noteBody" rows="15"></textarea>
                        <button className="addingNoteBtn">Add Note</button>
                    </div>

                    <div className="col-6">
                        <p>All saved notes will show here</p>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default UserNote
