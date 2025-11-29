import React from "react";
import { Link } from "react-router-dom";
import "../../appStyles/Career/BottomSection.css";
import { Button } from "../Button/Button";

const BottomSection = () => {
  return (
    <div className="career-bottom">
      {/* DOT IMAGE instead of CSS pattern */}
      <img
        src="/Graphic_Elements.png"
        alt=""
        className="dot-pattern"
      />

      <p>
        We’re a precision-driven transcription and language support company built
        on trust, accuracy, and innovation. Learn how our expertise adds value
        to every client we serve.
      </p>

      {/* ABOUT US button → goes to /about */}
      {/* <Link to="/about" className="bottom-btn">
        ABOUT US
      </Link> */}
      <div
                        className="bottom-btn"
                        onClick={() => navigate("/about")}
                        style={{ cursor: "pointer" }}
                      >
                        {/* <Button name="ABOUT US" 
                        /> */}
                                    <Button
              name="Get Started"
              paddingXL="8.6vw"
              paddingXM="24.5vw" // ← mobile padding
              widthL="10.9vw" // ← THIS IS KEY: let content decide width
              widthM="30.3vw" // ← auto width on mobile too
              bacgrounClr="#022447"
              bacgrounArrow="#ffffff"
              colorArrow="#022447"
              colorText="#ffffff"
              colorTextHover="#022447"
            />
                      </div>
    </div>
  );
};

export default BottomSection;
