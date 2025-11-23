// src/layouts/MainLayout.jsx

import React from 'react';
import { Outlet } from 'react-router-dom'; // Outlet es el marcador de posición para el contenido de la página
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

// Esta es la plantilla para todas las páginas públicas
const MainLayout = () => {
  return (
    <>
      <Navbar />
   
        <Outlet />
     
      <Footer />
    </>
  );
};

export default MainLayout;