// src/components/HomePage/CTA.jsx
import React, { useState } from "react";
import "../../appStyles/HomePageStyles/CTA.css";
import ContactSection from "./ContactSection";

const CTA = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      {/* Pink card section */}
      <section className="cta-wrapper">
        <div className="cta-card">
          <h2 className="cta-title">
            Daily guidance crafted <br />
            specifically for your goals.
          </h2>

          <p className="cta-text">
            Figma ipsum component variant main layer. Arrow arrow variant arrow
            object component slice. Pen select rectangle font selection frame
            draft.
          </p>

          <button
            className="cta-button"
            onClick={() => setShowContact(true)}
          >
            Get Started
          </button>
        </div>
      </section>

      {/* Popup contact form */}
      {showContact && <ContactSection onClose={() => setShowContact(false)} />}
    </>
  );
};

export default CTA;
