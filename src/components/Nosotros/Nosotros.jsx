import React from 'react';
import './Nosotros.css';
import { useNavigate } from "react-router-dom";



function Nosotros() {
    const navigate = useNavigate();
    const [clicked, setClicked] = React.useState(false);
    const handleOrganigramaClick = () => {
        setClicked(true);
        navigate("/organigrama");
    };

    return (
        <div className='nosotros-container'>
            <div className='titulo-container'>
                <h1 className='nosotros-titulo'>NOSOTROS</h1>
            </div>
            <div className='container-medium'>
                <div className='container-primero'>
                    <div className='container-card-mision'>
                        <div className='card-mision'>
                            <h2 className="card-title">Misión</h2>
                            <p className="card-text">
                                En DevCore, creamos soluciones digitales innovadoras que
                                impulsen el crecimiento de empresas y emprendedores en Bolivia.
                                Desarrollamos software a medida, aplicaciones y sitios web que
                                combinan tecnología de vanguardia, diseño funcional y seguridad,
                                adaptándonos a las necesidades únicas de cada cliente.
                            </p>
                        </div>
                    </div>
                    <div className='container-card-vision'>
                        <div className='card-vision'>
                            <h2 className="card-title">Visión</h2>
                            <p className="card-text">
                                Ser la empresa líder en Bolivia en desarrollo de
                                software, aplicaciones y sitios web, reconocida por la
                                calidad, creatividad e innovación de nuestras
                                soluciones, contribuyendo a la transformación digital
                                del país y expandiendo nuestra presencia en el
                                mercado latinoamericano.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='container-segundo'>
                    <div className='container-card-valores'>
                        <div className='card-valores'>
                            <h2 className="card-title">Valores</h2>
                            <ul className="valores-list">
                                <li className="valor-item">
                                    <span className="bullet"></span>
                                    Transparencia
                                </li>
                                <li className="valor-item">
                                    <span className="bullet"></span>
                                    Innovación
                                </li>
                                <li className="valor-item">
                                    <span className="bullet"></span>
                                    Pasión
                                </li>
                                <li className="valor-item">
                                    <span className="bullet"></span>
                                    Orientación al cliente
                                </li>
                                <li className="valor-item">
                                    <span className="bullet"></span>
                                    Adaptación al cambio
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className='container-organigrama'>
                        <button onClick={handleOrganigramaClick} className={`button-organigrama ${clicked ? 'active' : ''}`}>
                            Organigrama
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Nosotros;
