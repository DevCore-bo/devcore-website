import { Link } from "react-router-dom";
import "./Products.css";
import glucook from "../../assets/glucook.png";
import glow from "../../assets/glow.png"
import migo from "../../assets/coin.png"

const Products = () => {

    return (
        <div className="cont_product">
            <div className="cont_cardP">
                <img src={glucook} alt="" style={{ width: "80%" }}/>
                <div>
                    <h1>Glucook</h1>
                    <p>App para personas con diabetes que controla recetas y calcula valores nutricionales para una alimentación saludable.</p>
                    <Link to="/productos/glucook">
                        <button className="button_produc">Ver Más</button>
                    </Link>
                </div>
            </div>
            <div className="cont_cardP">
                <img src={glow} alt="" style={{ width: "80%" }}/>
                <div>
                    <h1>Glow and Shine</h1>
                    <p>Sitio Web de cuidado personal que ofrece servicios  para mejorar la belleza y bienestar de los usuarios.</p>
                    <Link to="/productos/glow-shine">
                        <button className="button_produc">Ver Más</button>
                    </Link>
                </div>
            </div>
            <div className="cont_cardP">
                <img src={migo} alt="" />
                <div>
                    <h1>Cuenta conmigo</h1>
                    <p>App moderno para la adiministración y gestión de gastos compartidos y/o individuales</p>
                    <Link to="/productos/migo">
                        <button className="button_produc">Ver Más</button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default Products;