import { useState, useEffect } from "react";
import PropTypes from "prop-types";
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
    <div
      className={`modal-overlay ${isClosing ? "fade-out" : ""}`}
      role="button"
      tabIndex={0}
      aria-label="Close contact modal"
      onClick={handleClose}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === "Escape") handleClose();
      }}
    >
      <div
        className={`modal-container ${isClosing ? "blow-down" : "blow-up"}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close-btn"
          onClick={handleClose}
          aria-label="Close modal"
        >
          &times;
        </button>
        <h3 id="contact-modal-title">Ozvi sa mi</h3>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Meno</label>
            <input id="name" type="text" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Správa</label>
            <textarea id="message" name="message" required rows="5" />
          </div>
          <button type="submit" className="submit-btn">
            Odoslať
          </button>
        </form>
      </div>
    </div>
  );
};

ContactModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ContactModal;
