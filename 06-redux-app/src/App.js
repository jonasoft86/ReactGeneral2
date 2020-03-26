import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
//import CantidadPokemon from './components/CantidadPokemon';
//import CompraPokemon from './components/CompraPokemon';

import { Provider } from 'react-redux'
import store from './redux/store';
import CompraPokemonHook from './components/CompraPokemon.hook';
import CantidadPokemonHook from './components/CantidadPokemon.hook';
import BuscadorPokemon from './components/buscador/BuscadorPokemon';
import ResultadoPokemon from './components/buscador/ResultadoPokemon';

function App() {

  //console.log(store.getState());

  return (
    <Provider store={store}>
    <div className="App container">
      <div className="row">
        <div className="col-12">
          <div className="card mt-5" style={{maxWidth: '370px' }}>
            <div className="row no-gutters">
              <div className="col-4">
                <img src={require('./img/pokemon.jpg')} alt="pokemon" className="card-img"></img>
              </div>
              <div className="col-8">
                <div className="card-body">
                  <div className="card-title h3 text-center">
                    <CantidadPokemonHook></CantidadPokemonHook>
                  </div>
                  <CompraPokemonHook></CompraPokemonHook>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 mt-4 border-top pt-3">
          <BuscadorPokemon></BuscadorPokemon>
        </div>
        <div className="col-12">
          <ResultadoPokemon></ResultadoPokemon>
        </div>
      </div>
    </div>
    </Provider>
  );
}

export default App;
