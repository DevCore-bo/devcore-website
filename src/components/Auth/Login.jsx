import React, { useState, useEffect } from "react";
import "./Auth.css";
import "../Hero/Hero.css"
import logo from "../../assets/LogoNavDevCore.png";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [playKey, setPlayKey] = useState(0);

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
    alert("Datos de Login: " + JSON.stringify(formData, null, 2));
  };

  return (
    <div className="auth-container">
      <div className="auth-content">
        <div className="auth-left" key={playKey}>
          <img src={logo} alt="DevCore Logo" className="hero-logo" />
          <h1 className="hero-title">Continúa tu evolución en DevCore</h1>
          <p className="hero-subtitle">
            Bienvenido de nuevo a DevCore. Ingresa y retoma tu viaje en un espacio diseñado para potenciar tus proyectos, compartir experiencias y seguir impulsando la innovación junto a nuestra comunidad de desarrolladores.
          </p>
        </div>

        {/* Columna derecha: Login */}
        <div className="auth-card-login">
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
              <button type="submit" className="boton">
                Ingresar
              </button>
              <a href="/register" className="boton">
                Registrarse
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
