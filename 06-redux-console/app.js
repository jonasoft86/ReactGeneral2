const createStore = require('redux').createStore;
const combineReducers = require('redux').combineReducers;

//## Actions

const BUY_POKEMON = 'BUY_POKEMON';
const buy_pokemon_action = (cant) => {
    return {
        type: BUY_POKEMON,
        payload: cant
    }
}

const RETURN_POKEMON = 'RETURN_POKEMON';
const return_pokemon_action = (cant) => {
    return {
        type: RETURN_POKEMON,
        payload: cant
    }
}

const BUY_SWITCH = 'BUY_SWITCH';
const buy_switch_action = (cant) => {
    return {
        type: BUY_SWITCH,
        payload: cant
    }
}

//## Reduce
/**
 * Trabajador que ordene la tienda, o bien que sabe que hacer con los datos
 */
const default_games_states = {
    pokemon: 10,
    yoshi: 10
}

const default_consoles_states = {
    ps5: 30,
    switch: 30
}


const games_reducer = (state = default_games_states, action) => {

    switch(action.type)
    {
        case BUY_POKEMON :{
            return {
                ...state,
                pokemon: state.pokemon - action.payload
            }
        }

        case RETURN_POKEMON :{
            return {
                ...state,
                pokemon: state.pokemon + action.payload
            }
        }

        default: 
            return state;
    }
}

//Enviarle el reducer al store
const consoles_reducer = (state = default_consoles_states, action) => {

    switch(action.type)
    {
        
        case BUY_SWITCH :{
            return {
                ...state,
                switch: state.switch - action.payload
            }
        }

        /*
        case RETURN_POKEMON :{
            return {
                ...state,
                pokemon: state.pokemon + action.payload
            }
        }
        */

        default: 
            return state;
    }
}

const rootReducers = combineReducers({
    games_reducer,
    consoles_reducer
});

//## Store
/**
 * Creacion de tienda
 */
const store = createStore(rootReducers);
console.log('Estado Inicial ',store.getState())

/**
 * Cliente compra , se ejecuta un cambio
 */

store.subscribe(()=>{
    console.log('Cambio de estado: ', store.getState());
});
/*
//Pasar accion 
store.dispatch(buy_pokemon_action(3));
store.dispatch(return_pokemon_action(2));
*/
store.dispatch(buy_switch_action(2));