import React from 'react';
import './Modal.css';

const Modal = ({ show, onClose, content }) => {
  if (!show) return null; 

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{content.title}</h2>
        <p>{content.fullText}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
