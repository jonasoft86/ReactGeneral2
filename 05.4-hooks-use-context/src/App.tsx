import React, { useState , useEffect, useContext} from 'react';
import logo from './logo.svg';
import './App.css';
import UserContext from './UserContext';

//User Logiado
const _user = {
  username: 'jonathan',
  role: 'Admin'
}

const useCustomInputState = (_value:any = null) => {
  const [value, setInputValue] = useState(_value);

  return  [value, setInputValue, !!value];
}

const BookList: React.FC = () =>{

  const [inputValue, setInputValue, isValid] = useCustomInputState();
  const [bookList, setBookList]: any = useState([]);
  const [count, setCount]: any = useState(0);

  const loggedUser: any = useContext(UserContext);

  const handleOnClick = () => {
    if(isValid){
      setBookList([...bookList, inputValue]);
      setCount(count + 1);
    }
  }

  useEffect(()=>{
    console.log('UseEffect Called')
  },[inputValue])

  return (
      <>
      <h3>User: { loggedUser.username }</h3>
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
    <UserContext.Provider value={_user}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <BookList />
        </header>
      </div>
    </UserContext.Provider>
  );
}

export default App;


