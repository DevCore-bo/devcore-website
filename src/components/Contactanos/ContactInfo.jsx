import React from "react";
import MapEmbed from "./MapEmbed";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./Contactanos.css";

const ContactInfo = () => {
  return (
    <div className="contact-card">
      <MapEmbed />
      <div className="contact-info">
        <h2>
          <FaMapMarkerAlt style={{ color: "#001B48", marginRight: "8px" }} />
          <a
            href="https://www.google.com/maps/place/Av.+Rafael+Pabon,+Zona+Irpavi,+La+Paz,+Bolivia"
            target="_blank"
            rel="noopener noreferrer"
          >
            Av. Rafael Pabón, Zona Irpavi, La Paz
          </a>
        </h2>

        <h2>
          <FaPhoneAlt style={{ color: "#001B48", marginRight: "8px" }} />
          <a href="tel:+59172047611">+591 72047611</a>
        </h2>

        <h2>
          <FaEnvelope style={{ color: "#001B48", marginRight: "8px" }} />
          <a href="mailto:devcore.bo@gmail.com">devcore.bo@gmail.com</a>
        </h2>
      </div>
    </div>
  );
};

export default ContactInfo;
