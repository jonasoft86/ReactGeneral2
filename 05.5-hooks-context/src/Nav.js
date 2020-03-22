import React, { useContext } from 'react';
import { UserContext } from './context/UserContext';

export default function Nav(){

    let { user } = useContext(UserContext);

    return <nav>
            { user && <h2>{ user.name.toUpperCase() }</h2> }
        </nav>
    
}