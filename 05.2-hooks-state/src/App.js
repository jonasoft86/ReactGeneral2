import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

/*
Sin Hook
class App extends React.Component {

  state = {
    contador: 0
  };

  incrementar = () => {
    this.setState({ contador: this.state.contador + 1 })
  }

  render(){
    const { contador } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {contador}
          </p>
          <button onClick={this.incrementar}>Incrementar</button>
        </header>
      </div>
    );
  }

}
*/

/**
 * Con hook
 */
function App () {

  const [ contador, setContador] = useState(0)

  const incrementar = () => {
    setContador( contador + 1 );
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {contador}
        </p>
        <button onClick={incrementar}>Incrementar</button>
      </header>
    </div>
  );
  
}

export default App;