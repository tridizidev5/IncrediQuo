import React from "react";
import "../../appStyles/HomePageStyles/FeatureSection.css";
import featureIllustration from "../../assets/features/Group 1304.png";
const FeatureSection = () => {
  return (
    <section className="feature-section">
      <div className="feature-inner">

        {/* SVG illustration */}
        <div className="feature-illustration">
          <img src={featureIllustration} alt="Feature illustration" className="feature-svg" />
        </div>

        {/* Right content */}
        <div className="feature-content">
          <h2 className="feature-title">
            Our Workflow Engineered  <br />
            for Accuracy & Speed
          </h2>

          <p className="feature-text">
            A streamlined, quality-first process that ensures every transcription, caption, and summary is delivered with precision, on time, every time.
          </p>

          <ul className="feature-list">
            <li className="feature-item">Clear requirement gathering and project scoping</li>
            <li className="feature-item">Tasks assigned to the right domain experts.</li>
            <li className="feature-item">Human-led processing with smart tech support</li>
            <li className="feature-item">Fast delivery across all working modes.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
