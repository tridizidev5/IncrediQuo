// src/components/HomePage/TaglineScroller.jsx
import React from "react";
import "../../appStyles/HomePageStyles/TaglineScroller.css";

const TaglineScroller = () => {
  return (
    <section className="tagline-section">
      {/* Row 1 */}
      <div className="tagline-row tagline-row--top">
        <div className="tagline-track">
          <span className="tagline-text tagline-text--muted">
            DRIVING TECHNOLOGY TOGETHER
          </span>
          <span className="tagline-text tagline-text--muted">
            DRIVING TECHNOLOGY TOGETHER
          </span>
        </div>
      </div>

      {/* Row 2 (highlighted gradient line) */}
      <div className="tagline-row tagline-row--middle">
        <div className="tagline-track">
          <span className="tagline-text tagline-text--highlight">
            DRIVEN BY EXPERTISE, COMMITTED TO EXCELLENCE
          </span>
          <span className="tagline-text tagline-text--highlight">
            DRIVEN BY EXPERTISE, COMMITTED TO EXCELLENCE
          </span>
        </div>
      </div>

      {/* Row 3 */}
      <div className="tagline-row tagline-row--bottom">
        <div className="tagline-track">
          <span className="tagline-text tagline-text--muted">
            EMPOWERING BUSINESSES WITH CLOUD EXPERTISE
          </span>
          <span className="tagline-text tagline-text--muted">
            EMPOWERING BUSINESSES WITH CLOUD EXPERTISE
          </span>
        </div>
      </div>
    </section>
  );
};

export default TaglineScroller;
