import React, { useState, useEffect } from "react";
import "../styles/contactmodal.css";

const ContactModal = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(isOpen);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setIsClosing(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div className={`modal-overlay ${isClosing ? "fade-out" : ""}`} onClick={handleClose}>
      <div
        className={`modal-container ${isClosing ? "blow-down" : "blow-up"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close-btn" onClick={handleClose}>
          &times;
        </button>
        <h3>Ozvi sa mi</h3>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <label>
            Meno
            <input type="text" name="name" required placeholder="" />
          </label>
          <label>
            Email
            <input type="email" name="email" required placeholder="" />
          </label>
          <label>
            Správa
            <textarea name="message" required placeholder="" rows="5" />
          </label>
          <button type="submit" className="submit-btn">Odoslať</button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
