import React, { useState } from "react";
import axios from "axios";
import "./style.css";


const EditModal = ({ closeEditModal, updateNote, editNote }) => {

    const { title = "", body = "" } = editNote;
    const [newTitle, setNewtitle] = useState(title);
    const [newBody, setNewBody] = useState(body);


    const updatedNote = () => {
        const { id } = editNote;
        axios.put(`/api/addingNote/${id}`, { title: newTitle, body: newBody })
            .then(response => {
                updateNote(response.data)
            })
    };

    return (
        <div className="editModalWrapper">
            <span className="editModalCloseBtn" onClick={closeEditModal}>&times;</span>
            <div className=" EditTitleAndBody">
                <div className="titleAndInputContainer">
                    <label>Title</label>
                    <br />
                    <input id="EditNoteTitle"
                        name="title"
                        type="text"
                        value={newTitle}
                        onChange={event => setNewtitle(event.target.value)}
                    />
                </div>

                <label>Body</label>
                <textarea id="EditNoteBody"
                    rows="15"
                    name="body"
                    type="text"
                    value={newBody}
                    onChange={event => setNewBody(event.target.value)}
                >
                </textarea>
                <button className="addingNoteBtn" onClick={updatedNote}>Update Note</button>
            </div>

        </div >
    )
};

export default EditModal;