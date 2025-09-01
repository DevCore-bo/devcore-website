import React, { useState } from "react";
import InputField from "./InputField";
import "./Contactanos.css";
import Swal from "sweetalert2"; // ✅ Importa SweetAlert2

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    consulta: "",
  });

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí reemplazamos el alert por SweetAlert2
    Swal.fire({
      title: "¡Consulta enviada!",
      text: `Gracias ${formData.nombre}, nos pondremos en contacto contigo pronto.`,
      icon: "success",
      confirmButtonText: "Aceptar",
      customClass: {
        popup: "custom-popup",
        confirmButton: "custom-confirm-button",
      },
    });

    // Limpiamos el formulario
    setFormData({
      nombre: "",
      correo: "",
      telefono: "",
      consulta: "",
    });
  };

  return (
    <div className="contact-card">
      <form className="contact-form" onSubmit={handleSubmit}>
        <InputField
          label="Nombre Completo"
          value={formData.nombre}
          onChange={handleChange("nombre")}
        />
        <InputField
          label="Correo Electrónico"
          type="email"
          value={formData.correo}
          onChange={handleChange("correo")}
        />
        <InputField
          label="Teléfono"
          type="tel"
          value={formData.telefono}
          onChange={handleChange("telefono")}
        />
        <InputField
          label="Consulta"
          type="textarea"
          value={formData.consulta}
          onChange={handleChange("consulta")}
        />
        <button className="boton" type="submit">Enviar Consulta</button>
      </form>
    </div>
  );
};

export default ContactForm;
