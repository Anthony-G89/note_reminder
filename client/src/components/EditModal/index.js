import React from "react";
import "./style.css";


const EditModal = ({ closeEditModal }) => {
    return (
        <div className="editModalWrapper">
            <span className="editModalCloseBtn" onClick={closeEditModal}>&times;</span>
            <div className=" EditTitleAndBody">
                <div className="titleAndInputContainer">
                    <label>Title</label>
                    <br />
                    <input id="noteTitle" />
                </div>

                <label>Body</label>
                <textarea id="noteBody" rows="15"></textarea>
                <button className="addingNoteBtn">Update Note</button>
            </div>

        </div >
    )
};

export default EditModal;