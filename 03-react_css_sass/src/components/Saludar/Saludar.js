import React from "react";
//import './Saludar.css'
import './Saludar.scss'

export default function Saludar(props){
    console.log(props);

    //const nombreCompleto = `Hola ${props.infoUser.nombre} ${props.infoUser.apellidos} como estas`
    
    const {nombre, apellidos} = props.infoUser;

    return (
        <div className="saludar">
            <p className="nombre">
                Hola {nombre} como estas
            </p>
            <p className="creditos">Creditos...</p> 
        </div>
    );
}