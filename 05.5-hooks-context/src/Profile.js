import React, { useContext } from 'react';
import { UserContext } from './context/UserContext';

export default function Profile(){

    let { user , login , logout } = useContext(UserContext);

    return <div>
            { user && <h1>{ user.name }</h1> }
            { user ? <button onClick={logout}>Logout</button> : <button onClick={login}>Login</button> }
        </div>
    
}