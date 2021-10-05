import React, { useState } from "react";
import "./style.css";


const EditModal = ({ closeEditModal, updateNote, openEditModal, editNote }) => {
    console.log(editNote)
    const { title = "", body = "" } = editNote;
    const [newTitle, setNewtitle] = useState(title);
    const [newBody, setNewBody] = useState(body);

    return (
        <div className="editModalWrapper">
            <span className="editModalCloseBtn" onClick={closeEditModal}>&times;</span>
            <div className=" EditTitleAndBody">
                <div className="titleAndInputContainer">
                    <label>Title</label>
                    <br />
                    <input id="noteTitle"
                        name="title"
                        value={newTitle}
                    />
                </div>

                <label>Body</label>
                <textarea id="noteBody"
                    rows="15"
                    name="body"
                    value={newBody}
                >

                </textarea>
                <button className="addingNoteBtn" onClick={() => openEditModal()}>Update Note</button>
            </div>

        </div >
    )
};

export default EditModal;