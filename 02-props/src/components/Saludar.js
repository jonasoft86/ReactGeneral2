import React from "react";

export default function Saludar(props){
    
    const { userInfo, saludarFn } = props;
    const { nombre = "Anonimo" } = userInfo;

    return(
        <div>
            <h2>{ userInfo.nombre } tiene { userInfo.edad } años</h2>

            <button onClick={ ()=> saludarFn(nombre) } >Saludar</button>
        </div>
    )
}
