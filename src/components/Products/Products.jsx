import React, { useEffect, useState, useRef } from "react";
import "./Products.css";
import glucook from "../../assets/glucook.png";
import gands from "../../assets/gands.png"
import coin from "../../assets/coin.png"

const Products = () => {

  return (
    <div className="cont_product">
        <div className="cont_cardP">
            <img src={glucook} alt="" />
            <div>
                <h1>Glucook</h1>
                <p>App para personas con diabetes que controla recetas y calcula valores nutricionales para una alimentación saludable.</p>
                <button className="button_produc">Ver más</button>
            </div>
        </div>
        <div className="cont_cardP">
            <img src={gands} alt="" />
            <div>
                <h1>Glow and Shine</h1>
                <p>Sitio Web de cuidado personal que ofrece servicios y recomendaciones para mejorar la belleza y bienestar de los usuarios.</p>
                <button className="button_produc">Ver más</button>
            </div>
        </div>
        <div className="cont_cardP">
            <img src={coin} alt="" />
            <div>
                <h1>AGCGI</h1>
                <p>App moderno para la adiministración y gestión de gastos compartidos y/o individuales</p>
                <button className="button_produc">Ver más</button>
            </div>
        </div>
    </div>

  );
};

export default Products;