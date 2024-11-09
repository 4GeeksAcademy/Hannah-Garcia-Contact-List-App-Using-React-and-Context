import React from "react";
import "../../styles/index.css";

const DeleteConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
    console.log("Modal open state:", isOpen); // Check if this is true

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h4>Confirm Deletion</h4>
                <p>Are you sure you want to delete this contact?</p>
                <button onClick={onConfirm}>Yes, Delete</button>
                <button onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
};

export default DeleteConfirmationModal;
