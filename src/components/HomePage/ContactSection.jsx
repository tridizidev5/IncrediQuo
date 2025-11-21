// src/components/HomePage/ContactSection.jsx
import React from "react";
import "../../appStyles/HomePageStyles/ContactSection.css";

const ContactSection = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us!");
    onClose(); // close after submit
  };

  return (
    <div className="contact-modal-backdrop" onClick={onClose}>
      <div
        className="contact-modal"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <button className="contact-close" onClick={onClose}>
          ×
        </button>

        <h2 className="contact-title">Get in touch with us</h2>
        <p className="contact-subtitle">
          We strive to respond to all inquiries within 48 hours. Thank you
          for your patience and interest.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            className="contact-input"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="contact-input"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="contact-input"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="contact-textarea"
            required
          />
          <button type="submit" className="contact-submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
