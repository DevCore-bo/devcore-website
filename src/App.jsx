import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import ProductDetailsPage from './pages/ProductDetails';
import ScrollTop from './components/utils/ScrollTop';
import './App.css';

const HomePageContent = () => {
  const buttonStyle = {
    display: 'inline-block',
    margin: '10px',
    padding: '12px 24px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    textDecoration: 'none',
    cursor: 'pointer'
  };

  return (
    <main>
      <Hero />
      <section id="nosotros">
        <h1>Nosotros</h1>
        <p>Contenido sobre nosotros...</p>
      </section>

      <section id="tecnologias">
        <h1>Tecnologías</h1>
        <p>Contenido sobre las tecnologías que usamos...</p>
      </section>

      <section id="productos" style={{ textAlign: 'center', padding: '4rem 1rem' }}>
        <h1>Nuestros Productos</h1>
        <p>Haz clic en un producto para ver sus detalles:</p>
         <div>
    <Link to="/productos/glucook" style={buttonStyle}>
      Glucook
    </Link>
    <Link to="/productos/glow-shine" style={buttonStyle}>
      Glow & Shine
    </Link>
    <Link to="/productos/coinsync" style={buttonStyle}>
      CoinSync
    </Link>
  </div>
      </section>

      <section id="contactanos">
        <h1>Contáctanos</h1>
        <p>Formulario de contacto aquí...</p>
      </section>
    </main>
  );
};

function App() {
  return (
    <BrowserRouter> 
      <ScrollTop /> 
      <Navbar /> 
      
      <Routes>
        <Route path="/" element={<HomePageContent />} />
        <Route path="/productos/:productId" element={<ProductDetailsPage />} />
        <Route path="*" element={<h1>404: Página no encontrada</h1>} />
      </Routes>
      
      <Footer /> 

    </BrowserRouter>
  );
}

export default App;