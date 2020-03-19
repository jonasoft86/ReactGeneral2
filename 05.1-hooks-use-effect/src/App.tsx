import React, { useState , useEffect } from 'react';
import logo from './logo.svg';
import './App.css';


const useCustomInputState = (_value:any = null) => {
  const [value, setInputValue] = useState(_value);

  return  [value, setInputValue, !!value];
  /*
  if(value)
    return [value, setInputValue, true]
  return [value, setInputValue, false]
  */
}

const BookList: React.FC = () =>{

  const [inputValue, setInputValue, isValid] = useCustomInputState();
  const [bookList, setBookList]: any = useState([]);
  const [count, setCount]: any = useState(0);

  const handleOnClick = () => {
    if(isValid){
      setBookList([...bookList, inputValue]);
      setCount(count + 1);
    }
  }

  useEffect(()=>{
    console.log('UseEffect Called')
  },[inputValue])
  /**
   * Arreglo vacio [] se llama una sola vez, al inicio
   */
  /**
   * Arreglo para que el use effect apunte al parametro especifico del cual estara pendiente
   */

  
  return (
      <>
      { !isValid && <h3>Not Valid</h3> }
      <h3>{inputValue} count: { count }</h3>
      <input value={inputValue} onChange={ (e:any) => setInputValue(e.target.value) }></input>
      <button onClick={handleOnClick}>Add Book</button>
      <ul>
        {
          bookList.map((item:any)=> <li key={item}>{ item }</li>)
        }
      </ul>
      </>
  )
}

const App : React.FC = () =>{
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BookList />
      </header>
    </div>
  );
}

export default App;

