import React, { useState } from "react";
import "../../appStyles/HomePageStyles/ContactSection.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactSection = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    emal: "",
    phonenumber: "",
    message: "",
    sourcepage: "Contact Us",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

  const scriptURL ="https://script.google.com/macros/s/AKfycbzszz_X76R31H3OvSukIj23f4bIOIe3yxLIXyKyyXd_Tqr2J16q3A3jUbyZkEqcr0VCwQ/exec";

  try {
      const formPayload = new FormData();
      for (let key in formData) {
        formPayload.append(key, formData[key]);
      }
      const response = await fetch(scriptURL, {
        method: "POST",
        body: formPayload, // No 'Content-Type' header for FormData
      });
      if (response.ok) {
        // alert("Form submitted successfully!");
        toast.success("Form submitted successfully!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
                setFormData({
          name: "",
          emal: "",
          phonenumber: "",
          message: "",
        });
      } else {
        // alert("Something went wrong. Please try again.");
        toast.warning("Something went wrong. Please try again.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      // alert("Error submitting the form. Please check your connection.");
      toast.error("Error submitting the form. Please check your connection.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div className="contact-modal-backdrop" onClick={onClose}>
      <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
        <button className="contact-close" onClick={onClose}>
          ×
        </button>

        <h2 className="contact-title">Get in touch with us</h2>
        <p className="contact-subtitle">
          We strive to respond to all inquiries within 48 hours.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your name"
            className="contact-input"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="emal"
            name="emal"
            id="emal"
            placeholder="emal"
            className="contact-input"
            value={formData.emal}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phonenumber"
            id="phonenumber"
            placeholder="Phone Number"
            className="contact-input"
            value={formData.phonenumber}
            onChange={handleChange}
          />

          <textarea
            rows="4"
            name="message"
            id="message"
            placeholder="Your message"
            className="contact-textarea"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit" className="contact-submit-btn">
            Submit
          </button>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
};

export default ContactSection;
