import React from "react";
import "./ModalStyles.css"; // You'll need to create this CSS file

const CustomModalChild = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Modal Title</h2>
          <button className="close-button" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="modal-body">
          <p>Your modal content goes here</p>
        </div>
        <div className="modal-footer">
          <button className="modal-button cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="modal-button confirm">Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default CustomModalChild;
