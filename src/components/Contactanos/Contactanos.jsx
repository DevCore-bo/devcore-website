import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import "./Contactanos.css";

const Contactanos = () => {
  return (
    <section id="contactanos" className="contactanos-section">
        <h2>CONTÁCTANOS</h2>
      <div className="contactanos-container">
        
        <ContactInfo />
        <ContactForm />

      </div>
    </section>
  );
};

export default Contactanos;