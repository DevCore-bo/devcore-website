// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
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
          <h1>Tecnologías</h1>
          {/* Aquí irá el contenido de la sección "Tecnologías" */}
        </section>

        <section id="productos">
          <h1>Nuestros Productos</h1>
          {/* Aquí irá el contenido de la sección "Productos" */}
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
