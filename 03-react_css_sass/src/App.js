import React from 'react';
import logo from './logo.svg';
import './App.css';
import Saludar from './components/Saludar/Saludar'

function App() {

  const infoUser = {
    nombre: 'Jonathan',
    apellidos: 'Monroy Muñoz',
    edad: '33',
    email: 'jonathan.monroy@live.com'
  }

  return (
    <div className="App">
      <h1>Primer Componente</h1>
      <h2 className="nombre">Hola mundo                                                                                                                                                                                                                                                                                                                                                                                                                              </h2>
      <Saludar infoUser={infoUser}/>
    </div>
  );
}

export default App;
