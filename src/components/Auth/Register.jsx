import React, { useState, useEffect } from "react";
import { auth, db } from "../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import "./Auth.css";
import logo from "../../assets/LogoNavDevCore.png";
import Swal from "sweetalert2";


const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
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
  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    Swal.fire({
      title: "Error de Registro",
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
    // Crear usuario en Firebase Auth
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      formData.email,
      formData.password
    );

    const user = userCredential.user;

    // Guardar datos adicionales
    await setDoc(doc(db, "users", user.uid), {
      name: formData.name,
      email: formData.email,
      createdAt: new Date(),
    });

    // Swal de éxito
    Swal.fire({
      title: "Usuario Registrado",
      text: "¡Registro exitoso!",
      icon: "success",
      confirmButtonText: "Aceptar",
      customClass: {
        popup: "custom-popup",
        confirmButton: "custom-confirm-button",
      },
    });

    // Limpiar formulario
    setFormData({ name: "", email: "", password: "", confirmPassword: "" });

  } catch (error) {
    Swal.fire({
      title: "Error de Registro",
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
          <img src={logo} alt="DevCore Logo" className="auth-hero-logo" />
          <h1 className="auth-hero-title">Crea tu camino en DevCore</h1>
          <p className="auth-hero-subtitle">
            Únete a DevCore y comienza a construir tu futuro como desarrollador.
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
            <div className="auth-field">
              <label>Contraseña</label>
              <input
                type="password"
                value={formData.password}
                onChange={handleChange("password")}
                required
              />
            </div>
            <div className="auth-field">
              <label>Confirmar Contraseña</label>
              <input
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange("confirmPassword")}
                required
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
