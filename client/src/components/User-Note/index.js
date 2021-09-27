/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import "./style.css";
import { Link } from 'react-router-dom';

const UserNote = ({displayingFirstName}) => {

    return (

        <div className="userNoteWrapper">
            <header className="headerDiv">
                <Link to="/"><h2 className="appTitleInDashbored">Note Reminder</h2></Link>
                <nav>
                    <div className="logoutContainer">
                        <Link to="/"><img className="logoutBtn" title="Logout" src={process.env.PUBLIC_URL + "./assets/outline_logout_black_48dp.png"} /></Link>
                    </div>
                </nav>
            </header>

            <div className="noteContainer">
                <h2 className="userWelcomeMessage"> Hello {displayingFirstName} !</h2>
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
                        <div className="card">
                            <div className="cardBody">
                                <h5>Meeting</h5>
                                <p className="cardText"> Have a meeting today with Mr.smith at 3pm</p>
                                <div className="deleteAndEditContainer">
                                    <img className="deleteBtn" title="Delete" src={process.env.PUBLIC_URL + "./assets/outline_delete_black_36dp.png"} />
                                    <img className="editBtn " title="Edit" src={process.env.PUBLIC_URL + "./assets/outline_edit_note_black_36dp.png"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default UserNote
