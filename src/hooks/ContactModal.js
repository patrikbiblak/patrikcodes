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
        <h2>Contact Us</h2>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <label>
            Name
            <input type="text" name="name" required placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" name="email" required placeholder="Your email" />
          </label>
          <label>
            Message
            <textarea name="message" required placeholder="Your message" rows="4" />
          </label>
          <button type="submit" className="submit-btn">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
