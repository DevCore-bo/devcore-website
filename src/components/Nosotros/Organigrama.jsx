import React from "react";
import "./Organigrama.css";
import nataliaImage from "../../assets/natalia.jpeg"; // Para Natalia
import mikaelaImage from "../../assets/mikaela.jpeg"; // Agrega las imágenes que tengas
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

    return (

        <div className="container-organigrama">
            <div className="container-titulo-or">
                <h1>ORGANIGRAMA</h1>
            </div>
            <div className="containerOganigrama">
                <img className="imageOrganigrama" src={organigramaImage} alt="Organigrma" />
            </div>
            <h1>Desarrolladores Destacados</h1>
            {/* <div className="container-card-organigramaprimero tarjeta-desarrollador">
                
                <div className="tarjeta-inner">
                
                    <div className="tarjeta-front">
                        <div className="container-imagen">
                            <img className="fotografia" src={nataliaImage} alt="Natalia Lozano" />
                        </div>
                        <div className="container-descripción">
                            <h1 className="nombre">Natalia Lozano</h1>
                            <p className="descripcion">Líder de proyecto</p>
                        </div>
                    </div>
                
                    <div className="tarjeta-back">
                        <p className="descripcion-back">
                            Natalia lidera el equipo con más de 3 años de experiencia en gestión de proyectos tecnológicos, asegurando la calidad y entrega a tiempo de cada solución.
                        </p>
                    </div>
                </div>
            </div> */}


            <div className="container-card-organigramasegundo">
                
                {desarrolladores.map(({ nombre, descripcion, foto }) => (
                    <div key={nombre} className="tarjeta-desarrollador">
                        <div className="tarjeta-inner">
                            {/* Frente */}
                            <div className="tarjeta-front">
                                <div className="container-imagen">
                                    <img className="fotografia" src={foto} alt={nombre} />
                                </div>
                                <div className="container-descripción">
                                    <h2 className="nombre">{nombre}</h2>
                                    <p className="descripcion">{descripcion}</p>
                                </div>
                            </div>
                            {/* Reverso */}
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
    );
}

export default Organigrama;