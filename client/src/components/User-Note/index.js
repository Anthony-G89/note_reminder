/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import "./style.css";
import { Link } from 'react-router-dom';

const UserNote = ({ displayingFirstName, showDeleteModal, showEditModal, capturingTitle, capturingBody, addingNote, noteList}) => {


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
                <h2 className="userWelcomeMessage"> Hey Anthony! {displayingFirstName} </h2>
                <div className="row rowDiv">
                    <div className="col-6 titleAndBody">
                        <div className="titleAndInputContainer">
                            <label>Title</label>
                            <br />
                            <input id="noteTitle"
                                type="text"
                                name="noteTitle"
                                onChange={event => capturingTitle(event.target.value)}
                            />
                        </div>

                        <label>Body</label>
                        <textarea
                            id="noteBody"
                            rows="15"
                            name="noteBody"
                            onChange={event => capturingBody(event.target.value)}
                        >
                        </textarea>
                        <button className="addingNoteBtn" onClick={addingNote}>Add Note</button>
                    </div>

                    <div className="col-6 listOfNote">
                        {noteList.length ?
                            noteList.map(note => (
                                <div key={note.id} className="displayingNotes">
                                    <div className="userNoteTitle">{note.title}</div>
                                    <div className="userNoteBody">{note.body}</div>
                                    <div className="deleteAndEditContainer">
                                        <img className="deleteBtn" onClick={() => showDeleteModal(note)} title="Delete" src={process.env.PUBLIC_URL + "./assets/outline_delete_black_36dp.png"} />
                                        <img className="editBtn " onClick={() => showEditModal(note)} title="Edit" src={process.env.PUBLIC_URL + "./assets/outline_edit_note_black_36dp.png"} />
                                    </div>
                                </div>
                            ))

                            : <div className="noNotesContainer">
                                <h1 className="noNotesh1">Enter a note ✏️</h1>
                            </div>
                        }


                    </div>
                </div>
            </div>

        </div>
    )
};

export default UserNote;
