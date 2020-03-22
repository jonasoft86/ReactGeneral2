import React, {useState} from 'react';

let UserContext = React.createContext()
let { Provider, Consumer } = UserContext;

function UserProvider({children}){

    let [user,setUser] = useState(null);

    function login(){
        setUser({name: "Jonathan"});
    }

    function logout(){
        setUser(null);
    }

    return(
        <Provider value={{user, login, logout}}>
            {children}
        </Provider>
    )
}

export { UserProvider, Consumer as UserConsumer, UserContext}
