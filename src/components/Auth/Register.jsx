import React, { useState } from "react";
import "./Auth.css";
import "../Navbar/Navbar.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Datos de Registro: " + JSON.stringify(formData, null, 2));
  };

  return (
    <div className="auth-container">
      <div className="auth-card-register">
        <h2>Registrarse</h2>
        <form onSubmit={handleSubmit}>
          <div className="auth-field">
            <label>Nombre Completo</label>
            <input
              type="text"
              value={formData.name}
              onChange={handleChange("name")}
            />
          </div>
          <div className="auth-field">
            <label>Correo Electrónico</label>
            <input
              type="email"
              value={formData.email}
              onChange={handleChange("email")}
            />
          </div>
          <div className="auth-field">
            <label>Contraseña</label>
            <input
              type="password"
              value={formData.password}
              onChange={handleChange("password")}
            />
          </div>
          <div className="auth-field">
            <label>Confirmar Contraseña</label>
            <input
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange("confirmPassword")}
            />
          </div>
          <div className="auth-actions">
            <button type="submit" className="btn btn-primary">
              Registrarse
            </button>
            <a href="/login" className="btn btn-outline">
              Ingresar
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
