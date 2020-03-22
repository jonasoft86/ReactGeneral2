import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { UserProvider } from './context/UserContext';
import Profile from './Profile';
import Nav from './Nav';

function App() {
  
    return(
      <div>
        <UserProvider>
          <Nav />
          <Profile />
        </UserProvider>
      </div>
    )

}

export default App;
