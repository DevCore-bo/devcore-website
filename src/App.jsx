// src/App.jsx

import React, { useEffect } from 'react';
import { useLocation, useNavigate, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthProvider';
import MainLayout from './layouts/MainLayout';


// Tus imports de componentes
import Hero from "./components/Hero/Hero";
import ProductDetailsPage from "./pages/ProductDetails";
import Home from "./pages/Home";
import Tecnology from "./components/Tecnology/Tecnology";
import Products from "./components/Products/Products";
import Nosotros from "./components/Nosotros/Nosotros";
import Organigrama from "./components/Nosotros/Organigrama";
import Contactanos from "./components/Contactanos/Contactanos";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

import "./App.css";

// --- PASO 1: CREA ESTE COMPONENTE CONTROLADOR ---
// Este componente no renderiza nada visible. Solo contiene la lógica.
const ScrollHandler = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // La lógica de scroll se ejecuta solo si estamos en la ruta principal ('/')
    if (location.pathname === '/') {
      const sectionId = location.state?.scrollToSection;
      if (sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
          const timer = setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            navigate(location.pathname, { replace: true, state: {} });
          }, 100);
          return () => clearTimeout(timer);
        }
      }
    }
  }, [location, navigate]);

  return null; // No renderiza nada
};

function App() {
  return (
      <AuthProvider>
    <Router>
      
      <ScrollHandler /> 

      <main>
        <Routes>
      <Route element={<MainLayout />}>
          <Route
            path="/"
            element={
              <>
              
                  <Hero />
            

                <section id="nosotros">
                  <Nosotros />
                </section>

                <section id="tecnologias">
                  <Tecnology />
                </section>

                <section id="productos">
                  <Products />
                </section>

                <section id="contactanos">
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
          </Route>
      <Route 
    path="/home" 
    element={
      <ProtectedRoute> 
        <Home />
      </ProtectedRoute>
    } 
  />
          <Route path="*" element={<h1>404: Página no encontrada</h1>} />
        </Routes>
      </main>
    </Router>
    </AuthProvider>
  );
}

export default App;