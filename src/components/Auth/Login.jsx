import React, { useState, useEffect } from "react";
import "./Auth.css";
import "../Hero/Hero.css";
import logo from "../../assets/LogoNavDevCore.png";
import logoAzul from "../../assets/LogoAzul.png"
import { auth } from "../../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [playKey, setPlayKey] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handler = () => setPlayKey((k) => k + 1);
    window.addEventListener("replay-hero", handler);
    handler();
    return () => window.removeEventListener("replay-hero", handler);
  }, []);

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);

      Swal.fire({
        title: "Bienvenido",
        text: "Has iniciado sesión correctamente",
        icon: "success",
        confirmButtonText: "Aceptar",
        customClass: {
          popup: "custom-popup",
          confirmButton: "custom-confirm-button",
        },
      }).then(() => {
        navigate("/home");
      });

    } catch (error) {
      Swal.fire({
        title: "Error de Login",
        text: error.message,
        icon: "error",
        confirmButtonText: "Aceptar",
        customClass: {
          popup: "custom-popup",
          confirmButton: "custom-confirm-button",
        },
      });
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-content">
        <div className="auth-left" key={playKey}>
          <img src={logoAzul} alt="DevCore Logo" className="auth-hero-logo" />
          <h1 className="auth-hero-title">Continúa tu evolución en DevCore</h1>
          <p className="auth-hero-subtitle">
            Bienvenido de nuevo a DevCore. Ingresa y retoma tu viaje en un espacio diseñado para potenciar tus proyectos, compartir experiencias y seguir impulsando la innovación junto a nuestra comunidad de desarrolladores.
          </p>
        </div>

        <div className="auth-card-login">
          <h2>Iniciar Sesión</h2>
          <form onSubmit={handleSubmit}>
            <div className="auth-field">
              <label>Correo Electrónico</label>
              <input
                type="email"
                value={formData.email}
                onChange={handleChange("email")}
                required
              />
            </div>
            <div className="auth-field">
              <label>Contraseña</label>
              <input
                type="password"
                value={formData.password}
                onChange={handleChange("password")}
                required
              />
            </div>
            <div className="auth-actions">
              <button className="button-pro" type="submit">
                Ingresar
              </button>
              <a href="/register" className="button-pro">
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
