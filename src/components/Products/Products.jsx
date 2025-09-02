import { Link } from "react-router-dom";
import "./Products.css";
import glucook from "../../assets/glucook.png";
import glowandshine from "../../assets/glow.png"
import migo from "../../assets/migo.png"

const Products = () => {

    return (
        <div className="cont-product">
            <div className="cont-title-pro">
                <h1>NUESTROS PRODUCTOS</h1>
            </div>
            <div className="cont-card-pro">
                <div className="cont-cardP">
                    <div className="cont-ima-pro">
                        <img src={glowandshine} alt="" style={{ width: "70%" }} />
                    </div>
                    <div className="cont-desc-pro">
                        <h2>Glow And Shine</h2>
                        <p>Sitio Web de cuidado personal que ofrece servicios  para mejorar la belleza y bienestar de los usuarios.</p>
                        <div className='cont-button-pro'>
                            <a to="/productos/glow-shine">
                                <button className="button-pro">
                                    Ver Más
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="cont-cardP">
                    <div className="cont-ima-pro">
                        <img src={glucook} alt="" style={{ width: "70%" }} />
                    </div>
                    <div className="cont-desc-pro">
                        <h2>Glucook</h2>
                        <p>App para personas con diabetes que controla recetas y calcula valores nutricionales para una alimentación saludable.</p>
                        <div className='cont-button-pro'>
                            <a to="/productos/glucook">
                                <button className="button-pro">
                                    Ver Más
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="cont-cardP">
                    <div className="cont-ima-pro">
                        <img src={migo} alt="" style={{ width: "80%" }} />
                    </div>
                    <div className="cont-desc-pro">
                        <h2>Cuenta-Migo</h2>
                        <p>App moderno para la adiministración y gestión de gastos compartidos y/o individuales</p>
                        <div className='cont-button-pro'>
                            <a to="/productos/migo">
                                <button className="button-pro">
                                    Ver Más
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;