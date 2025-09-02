import React, { useState, useEffect } from "react";
import "./Auth.css";
import "../Hero/Hero.css";
import logo from "../../assets/LogoNavDevCore.png";
import logoAzul from "../../assets/LogoAzul.png";
import { auth } from "../../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [playKey, setPlayKey] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
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
      let mensaje = "Ocurrió un error inesperado. Intenta nuevamente.";

      if (error.code === "auth/invalid-email") {
        mensaje = "El correo electrónico no es válido.";
      } else if (error.code === "auth/user-disabled") {
        mensaje = "Esta cuenta ha sido deshabilitada.";
      } else if (error.code === "auth/user-not-found") {
        mensaje = "No existe una cuenta con este correo.";
      } else if (error.code === "auth/wrong-password") {
        mensaje = "La contraseña es incorrecta.";
      } else if (error.code === "auth/too-many-requests") {
        mensaje = "Demasiados intentos fallidos. Intenta más tarde.";
      } else if (error.code === "auth/missing-password") {
        mensaje = "Debes ingresar una contraseña.";
      } else if (error.code === "auth/weak-password") {
        mensaje = "La contraseña debe tener al menos 6 caracteres.";
      }

      Swal.fire({
        title: "Error al Iniciar Sesión",
        text: mensaje,
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
        <div className="contenedor-card">
          <div className="auth-card-login">
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit} className="form">
              <div className="auth-field">
                <label>Correo Electrónico</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={handleChange("email")}
                  required
                />
              </div>

              <div className="auth-field password-field">
                <label>Contraseña</label>
                <div className="password-input">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange("password")}
                    required
                  />
                  <button
                    type="button"
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <p className="auth-register-text">
                ¿No tienes una cuenta?{" "}
                <a href="/register" className="register-link">
                  Registrate
                </a>
              </p>

              <div className="auth-actions">
                <button className="button-pro" type="submit">
                  Ingresar
                </button>
                <a href="/register" className="button-pro">
                  Registrate
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;