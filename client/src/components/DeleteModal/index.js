import React from 'react';
import "./style.css";

const DeleteModal = ( {closeModal}) => {

    return (
    
            <div className="modal-wrapper">
                <div className="modal-box">
                    <div className="modal-header">
                        <h2 className="modal-Title">Deleting Note</h2>
                        <span className="closeBtn" onClick={closeModal}>&times;</span>
                    </div>
                    <div className="modal-content">
                        <p className="modal-text">Are you sure you want to delete note.</p>
                    </div>
                    <div className="modal-footer">
                        <button  className="cancelBtn" onClick={closeModal}>Cancel</button>
                        <button className="deleteBtnInModal">Delete</button>
                    </div>
                </div>
            </div>
    )
};

export default DeleteModal;
