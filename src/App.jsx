// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";

//Aldahir
import Tecnology from "./components/Tecnology/Tecnology";
import Products from "./components/Products/Products";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        {}
        <Hero />
        <section id="nosotros">
          <h1>Nosotros</h1>
          {/* Aquí irá el contenido de la sección "Nosotros" */}
        </section>

        <section id="tecnologias">
          <div className="cont_tec">
            <h1>Tecnologías</h1>
            <Tecnology/>
          </div>
        </section>

        <section id="productos">
          <div className="cont_produc">
            <h1>Nuestros Productos</h1>
            <Products/>
          </div>
        </section>

        <section id="contactanos">
          <h1>Contáctanos</h1>
          {/* Aquí irá el contenido de la sección "Contáctanos" */}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;