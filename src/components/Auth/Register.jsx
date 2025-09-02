import React, { useState } from "react";
import "./Auth.css";
import "../Hero/Hero.css";
import logoAzul from "../../assets/LogoAzul.png";
import { auth } from "../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react"; // 👈 iconos ojo

const Register = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Validar que las contraseñas coincidan
    if (formData.password !== formData.confirmPassword) {
      Swal.fire({
        title: "Error",
        text: "Las contraseñas no coinciden",
        icon: "error",
        confirmButtonText: "Aceptar",
        customClass: {
          popup: "custom-popup",
          confirmButton: "custom-confirm-button",
        },
      });
      return;
    }

    try {
      await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      Swal.fire({
        title: "Cuenta creada",
        text: "Tu cuenta ha sido creada exitosamente",
        icon: "success",
        confirmButtonText: "Aceptar",
        customClass: {
          popup: "custom-popup",
          confirmButton: "custom-confirm-button",
        },
      }).then(() => {
        navigate("/login"); // 👈 Redirige a login después de aceptar
      });
    } catch (error) {
      Swal.fire({
        title: "Error en Registro",
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
        <div className="auth-left">
          <img src={logoAzul} alt="DevCore Logo" className="auth-hero-logo" />
          <h1 className="auth-hero-title">Únete a DevCore</h1>
          <p className="auth-hero-subtitle">
            Regístrate y comienza tu viaje en un espacio creado para potenciar tus proyectos,
            aprender en comunidad y seguir innovando junto a desarrolladores como tú.
          </p>
        </div>

        <div className="contenedor-card">
          <div className="auth-card-login">
            <h2>Registrarse</h2>
            <form onSubmit={handleSubmit} className="form">
              <div className="auth-field">
                <label>Nombre Completo</label>
                <input
                  type="text"
                  value={formData.nombre}
                  onChange={handleChange("nombre")}
                  required
                />
              </div>

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
              <div className="auth-field password-field">
                <label>Confirmar Contraseña</label>
                <div className="password-input">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={handleChange("confirmPassword")}
                    required
                  />
                  <button
                    type="button"
                    className="toggle-password"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>
              </div>
              <p className="auth-register-text">
                ¿Ya tienes una cuenta?{" "}
                <Link to="/login" className="register-link">
                  Inicia Sesión
                </Link>
              </p>

              <div className="auth-actions">
                <button className="button-pro-auth" type="submit">
                  Crear Cuenta
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
