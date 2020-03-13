import React , { useState, useEffect } from 'react'

export default function Car(){

    //const [started, setStarted] = useState(false);
    //const [countKm, setCountKm] = useState(0);

    const [carState, setCarState] = useState({
        started: false,
        countKm: 0
    })

    useEffect(() => {
        document.title = `Coche ${carState.started}`;
    }, carState.started)

    const checkStateCar = () => {
        if(carState.started)
            return <span style={{ color: "green" }}>Encencido</span>
        return <span  style={{ color: "red" }}>Apagado</span>
    }

    
    const incrementarKM = num => {
        if(carState.started)
            setCarState({
                ...carState,
                countKm: carState.countKm + num
            }) 
        else
            alert('El coche esta apagado')
    }


    return(
        <div>
            <h2>Nuestro componente esta: { checkStateCar() } </h2>
            <h2>Kilometros recorridos: { carState.countKm } Km</h2>
            <button onClick={() => { 
                setCarState({
                ...carState,
                started: !carState.started
                }) 
            }}>Encender/Apagar</button>
           
           <button onClick={() => { incrementarKM(1) } } >Incrementar Kilometros</button>
        </div>
    );
}