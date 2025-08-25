import React from 'react';
import './Nosotros.css';
import { useNavigate } from "react-router-dom";
import miniLogo from "../../assets/MiniLogoDevCore.png";



function Nosotros() {
    const navigate = useNavigate();
    const [clicked, setClicked] = React.useState(false);
    const handleOrganigramaClick = () => {
        setClicked(true);
        navigate("/organigrama");
    };

    return (
        <div className='nosotros-container'>
            <div className='cont-title'>
                <h1>NOSOTROS</h1>
            </div>
            <div className='cont-body-nos'>
                <div className='cont-first'>
                    <div className='cont-mission'>
                        <h2>Misión</h2>
                        <p>
                            En DevCore, creamos soluciones digitales innovadoras que
                            impulsen el crecimiento de empresas y emprendedores en Bolivia.
                            Desarrollamos software a medida, aplicaciones y sitios web que
                            combinan tecnología de vanguardia, diseño funcional y seguridad,
                            adaptándonos a las necesidades únicas de cada cliente.
                        </p>
                        <img src={miniLogo} alt="" />
                    </div>
                </div>
                <div className='cont-second'>
                    <div className='cont-values'>
                        <h2>Valores</h2>
                        <ul className="list-values">
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
                        <img src={miniLogo} alt="" />
                    </div>
                    <div className='cont-body-button'>
                        <button onClick={handleOrganigramaClick} className={`button-organigrama ${clicked ? 'active' : ''}`}>
                            Organigrama
                        </button>
                    </div>
                </div>
                <div className='cont-third'>
                    <div className='cont-vision'>
                        <h2>Visión</h2>
                        <p>
                            Ser la empresa líder en Bolivia en desarrollo de
                            software, aplicaciones y sitios web, reconocida por la
                            calidad, creatividad e innovación de nuestras
                            soluciones, contribuyendo a la transformación digital
                            del país y expandiendo nuestra presencia en el
                            mercado latinoamericano.
                        </p>
                        <img src={miniLogo} alt="" />
                    </div>
                    
                </div>
            </div>

        </div>
    );
}

export default Nosotros;
