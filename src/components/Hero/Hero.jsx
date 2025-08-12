import React, { useEffect, useState } from "react";
import "./Hero.css";
import logo from "../../assets/LogoNavDevCore.png";

const Hero = () => {
  const [playKey, setPlayKey] = useState(0);
  useEffect(() => {
    const handler = () => {
      setPlayKey((k) => k + 1);
    };
    window.addEventListener("replay-hero", handler);
    handler();
    return () => window.removeEventListener("replay-hero", handler);
  }, []);

  return (
    <section id="inicio" className="hero-section">
      <div key={playKey} className="hero-grid">
        <div className="hero-left">
          <img src={logo} alt="DevCore" className="hero-logo" />
        </div>
        <div className="hero-right">
          <h1 className="hero-title">DevCore</h1>
          <p className="hero-subtitle">
            Somos una empresa joven y dinámica, dedicada a crear soluciones
            digitales con un enfoque humano y orientadas a tus necesidades.
          </p>
        </div>
      </div>
      {}
      <div className="hero-glow" />
      <div className="hero-gradient-overlay" />
    </section>
  );
};

export default Hero;
