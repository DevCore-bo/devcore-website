import React from "react";
import "./Contactanos.css";

const MapEmbed = () => {
  return (
    <div className="map-container">
      <iframe
        title="Ubicación"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.8256418622095!2d-68.0868217!3d-16.5348978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f21239926c7cd%3A0x2a399dfb88c485d6!2sEscuela%20Militar%20de%20Ingenier%C3%ADa%20-%20Unidad%20Acad%C3%A9mica%20La%20Paz!5e0!3m2!1ses-419!2sbo!4v1755053028267!5m2!1ses-419!2sbo"
        className="map-iframe"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default MapEmbed;

