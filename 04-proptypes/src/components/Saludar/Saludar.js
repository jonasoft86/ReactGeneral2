import React from "react";
//import './Saludar.css'
import './Saludar.scss'
import PropTypes from 'prop-types'

export default function Saludar(props){
    console.log(props);

    const { data : {nombre , apellidos, edad, ciudad}
    } = props;

    return (
        <div className="saludar">
            <p className="nombre">
                Hola {nombre} {apellidos} como estas
            </p>
            <p className="creditos">Creditos...</p> 
        </div>
    );
}

Saludar.propTypes = {
    nombre: PropTypes.string.isRequired,
    apellidos: PropTypes.string.isRequired,
    enviarSaludo: PropTypes.func
}