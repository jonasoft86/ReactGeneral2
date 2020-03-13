import React from 'react';
import logo from './logo.svg';
import './App.css';
import Saludar from './components/Saludar/Saludar'

function App() {


  const data = {
    nombre: "jonathan",
    apellidos: "Monroy Muñoz",
    edad: 33,
    ciudad: "Santiago"
  }

  const enviarSaludo = nombre => {
    console.log("Hola "+nombre)
  }
  return (
    <div className="App">
      <h1>Primer Componente</h1>
      <h2 className="nombre">Hola mundo                                                                                                                                                                                                                                                                                                                                                                                                                              </h2>
      <Saludar 
      data={data}
      />
    </div>
  );
  /*
  return (
    <div className="App">
      <h1>Primer Componente</h1>
      <h2 className="nombre">Hola mundo                                                                                                                                                                                                                                                                                                                                                                                                                              </h2>
      <Saludar 
      nombre= "Jonathan"
      apellidos = ""
      enviarSaludo={enviarSaludo}
      />
    </div>
  );
  */
}

export default App;
