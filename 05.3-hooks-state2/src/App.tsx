import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const useCustomInputState = (_value:any = null) => {
  const [value, setInputValue] = useState(_value);

  if(value)
    return [value, setInputValue, true]
  return [value, setInputValue, false]
}

const BookList: React.FC = () =>{

  const [inputValue, setInputValue, isValid] = useCustomInputState();
  const [bookList, setBookList]: any = useState([]);


  const handleOnClick = () => {
    if(isValid)
      setBookList([...bookList, inputValue]);
  }
  
  return (
      <>
      <h3>{inputValue}</h3>
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
