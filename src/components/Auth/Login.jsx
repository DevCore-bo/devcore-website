import React, { useState } from "react";
import "./Auth.css";
import "../Navbar/Navbar.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Datos de Login: " + JSON.stringify(formData, null, 2));
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
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
          <div className="auth-actions">
            <button type="submit" className="btn btn-primary">
              Ingresar
            </button>
            <a href="/register" className="btn btn-outline">
              Registrarse
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;