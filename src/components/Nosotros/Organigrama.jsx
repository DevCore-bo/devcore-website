// Organigrama.js

import "./Organigrama.css";
import React, {useEffect } from 'react';
import nataliaImage from "../../assets/natalia.jpeg";
import mikaelaImage from "../../assets/mikaela.jpeg"; 
import fabricioImage from "../../assets/fabricio.jpeg";
import claudiaImage from "../../assets/claudia.jpeg";
import aldahirImage from "../../assets/aldahir.jpeg";
import organigramaImage from "../../assets/Organigrama.png"

function Organigrama() {

    const desarrolladores = [
        { nombre: "Natalia  Lozano", descripcion: "Desarrolladora", foto: nataliaImage },
        { nombre: "Mikaela Gisbert", descripcion: "Desarrolladora", foto: mikaelaImage },
        { nombre: "Fabricio Coaquira", descripcion: "Desarrollador", foto: fabricioImage },
        { nombre: "Claudia Nina ", descripcion: "Desarrolladora", foto: claudiaImage },
        { nombre: "Aldahir Fernandez", descripcion: "Desarrollador", foto: aldahirImage },
    ];
useEffect(() => {
   
    const timer = setTimeout(() => {
     
      document.documentElement.scrollTop = 0; // Para la mayoría de navegadores modernos
      document.body.scrollTop = 0; // Para compatibilidad con otros navegadores/casos
    }, 0);

 
    return () => clearTimeout(timer);
    
  }, []); 

    return (
        <div className="organigrama">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>

            <div className="container-organigrama">
                <div className="container-titulo-or">
                    <h1>ORGANIGRAMA</h1>
                </div>
                <div className="containerOganigrama">
                    <img className="imageOrganigrama" src={organigramaImage} alt="Organigrma" />
                </div>
                <h1 className="titleTwo">Desarrolladores Destacados</h1>
                <div className="container-card-organigramasegundo">
                    {desarrolladores.map(({ nombre, descripcion, foto }) => (
                        <div key={nombre} className="tarjeta-desarrollador">
                            <div className="tarjeta-inner">
                                <div className="tarjeta-front">
                                    <div className="container-imagen">
                                        <img className="fotografia" src={foto} alt={nombre} />
                                    </div>
                                    <div className="container-descripción">
                                        <h2 className="nombre">{nombre}</h2>
                                        <p className="descripcion">{descripcion}</p>
                                    </div>
                                </div>
                                <div className="tarjeta-back">
                                    <p className="descripcion-back">
                                        {`${nombre} tiene experiencia en desarrollo frontend y backend, especializándose en aplicaciones React y arquitectura REST. Siempre busca innovar y optimizar procesos en los proyectos.`}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Organigrama;