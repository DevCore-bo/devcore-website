import React, { useState, useEffect } from "react";
import "./Auth.css";
import "../Hero/Hero.css";
import logo from "../../assets/LogoNavDevCore.png";
import { auth } from "../../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [playKey, setPlayKey] = useState(0);
  const navigate = useNavigate();

   useEffect(() => {
     
      const timer = setTimeout(() => {
       
        document.documentElement.scrollTop = 0; // Para la mayoría de navegadores modernos
        document.body.scrollTop = 0; // Para compatibilidad con otros navegadores/casos
      }, 0);
  
   
      return () => clearTimeout(timer);
      
    }, []); 

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

      // Login exitoso
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
        // Redirige al Dashboard/Home
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
          <img src={logo} alt="DevCore Logo" className="auth-hero-logo" />
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
