// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import ScrollTop from "./components/utils/ScrollTop";
import ProductDetailsPage from "./pages/ProductDetails";

// Aldahir
import Tecnology from "./components/Tecnology/Tecnology";
import Products from "./components/Products/Products";

// Claudia
import Nosotros from "./components/Nosotros/Nosotros";
import Organigrama from "./components/Nosotros/Organigrama";

// Mikaela
import Contactanos from "./components/Contactanos/Contactanos";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

// Natalia
// (Aquí irán los imports cuando estén listos)

import "./App.css";

// Componente para los botones de productos (como en el primer código)
const ProductosBotones = () => {
  const buttonStyle = {
    display: "inline-block",
    margin: "10px",
    padding: "12px 24px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "5px",
    textDecoration: "none",
    cursor: "pointer",
  };

  return (
    <div style={{ textAlign: "center", marginTop: "1rem" }}></div>
  );
};

function App() {
  return (
    <Router>
      <ScrollTop />
      <Navbar />
      <main>
        <Routes>
          {/* Página principal */}
          <Route
            path="/"
            element={
              <>
                <Hero />

                <section id="nosotros">
                  <Nosotros />
                </section>

                <section id="tecnologias">
                  <div className="cont_tec">
                    <h1>Tecnologías</h1>
                    <Tecnology />
                  </div>
                </section>

                <section id="productos">
                  <div className="cont_produc">
                    <h1>Nuestros Productos</h1>
                    <Products />
                    <ProductosBotones /> {/* Botones con links a detalles */}
                  </div>
                </section>

                <section id="contactanos" className="sec2">
                  <Contactanos />
                </section>
              </>
            }
          />

          {/* Detalles de productos */}
          <Route path="/productos/:productId" element={<ProductDetailsPage />} />

          {/* Otras páginas */}
          <Route path="/organigrama" element={<Organigrama />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Página no encontrada */}
          <Route path="*" element={<h1>404: Página no encontrada</h1>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
