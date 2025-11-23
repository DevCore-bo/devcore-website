import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import "./Contactanos.css";

const Contactanos = () => {
  return (
    <div className="contactanos-section">
        <h1 className="titulo">CONTÁCTANOS</h1>
      <div className="contactanos-container">  
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contactanos;