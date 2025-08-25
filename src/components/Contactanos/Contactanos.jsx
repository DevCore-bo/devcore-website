import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import "./Contactanos.css";

const Contactanos = () => {
  return (
    <div className="contactanos-section">
        <h2 className="titulo">CONTÁCTANOS</h2>
      <div className="contactanos-container">  
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contactanos;