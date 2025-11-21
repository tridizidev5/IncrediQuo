import React from "react";
import "../../appStyles/HomePageStyles/Hero.css";
import heroIllustration from "../../assets/hero/hero-illustration.png";

const Hero = () => {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero">
      <div className="hero__inner">
        <div className="hero__content">
          <h1 className="hero__title">Lorem ipsum content is dummy text</h1>
          <p className="hero__subtitle">
            Provide a network for all your needs with ease and fun using NetONE
            discover interesting features from us.
          </p>
          <button className="hero__button" onClick={scrollToServices}>
            Get Started
          </button>
        </div>

        <div className="hero__image">
          <img src={heroIllustration} alt="Hero Illustration" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
