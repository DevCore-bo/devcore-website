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
        <div>Titulo</div>
        <div>Cuerpo</div>
    </div>
    );
}

export default Nosotros;
