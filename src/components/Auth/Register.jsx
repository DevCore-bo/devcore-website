import React, { useState, useEffect } from "react";
import "./Auth.css";
import "../Hero/Hero.css";
import logoAzul from "../../assets/LogoAzul.png";
import { auth, db } from "../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const Register = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  useEffect(() => {

    const timer = setTimeout(() => {

      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 0);


    return () => clearTimeout(timer);

  }, []);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      const user = userCredential.user;

      // Crear documento en la colección users_admin
      await setDoc(doc(db, "users_admin", user.uid), {
        name: formData.nombre,
        email: formData.email,
        role: "admin",
        createdAt: new Date()
      });

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
        navigate("/login");
      });
    } catch (error) {
      let mensaje = "Ocurrió un error inesperado. Intenta nuevamente.";

      if (error.code === "auth/email-already-in-use") {
        mensaje = "Este correo ya está registrado. Intenta con otro.";
      } else if (error.code === "auth/invalid-email") {
        mensaje = "El correo electrónico no es válido.";
      } else if (error.code === "auth/operation-not-allowed") {
        mensaje = "El registro con correo y contraseña está deshabilitado.";
      } else if (error.code === "auth/weak-password") {
        mensaje = "La contraseña debe tener al menos 6 caracteres.";
      } else if (error.code === "auth/missing-email") {
        mensaje = "Debes ingresar un correo electrónico.";
      } else if (error.code === "auth/missing-password") {
        mensaje = "Debes ingresar una contraseña.";
      } else if (error.code === "auth/network-request-failed") {
        mensaje = "Error de red. Verifica tu conexión a internet.";
      }
      Swal.fire({
        title: "Error al Registrarse",
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
