import React, { useState, useEffect } from "react";
import "./Auth.css";
import "../Hero/Hero.css"
import logo from "../../assets/LogoNavDevCore.png";

const Register = () => {
    const [playKey, setPlayKey] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    const handler = () => setPlayKey((k) => k + 1);
    window.addEventListener("replay-hero", handler);
    handler();
    return () => window.removeEventListener("replay-hero", handler);
  }, []);


  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Datos de Registro: " + JSON.stringify(formData, null, 2));
  };

  return (
    <div className="auth-container">
      <div className="auth-content">
        <div className="auth-left" key={playKey}>
          <img src={logo} alt="DevCore Logo" className="hero-logo" />
          <h1 className="hero-title">Crea tu camino en DevCore</h1>
          <p className="hero-subtitle">
            Únete a DevCore y comienza a construir tu futuro como desarrollador. Regístrate para acceder a un ecosistema donde la innovación, la colaboración y el aprendizaje se convierten en las bases para crear soluciones tecnológicas con impacto.
          </p>
        </div>
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
              <button type="submit" className="boton">
                Registrarse
              </button>
              <a href="/login" className="boton">
                Ingresar
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
