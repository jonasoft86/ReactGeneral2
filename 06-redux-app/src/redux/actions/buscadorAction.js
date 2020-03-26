import Axios from "axios";

export const FETCH_POKEMON_REQUEST = 'FETCH_POKEMON_REQUEST';
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';
export const FETCH_POKEMON_FAILURE = 'FETCH_POKEMON_FAILURE';

//Actions
export const fechPokemonRequest = () => {
    return {
        type: FETCH_POKEMON_REQUEST
    }
}

export const fechPokemonSuccess = (Pokemon) => {
    return {
        type: FETCH_POKEMON_SUCCESS,
        payload: Pokemon
    }
}

export const fechPokemonFailure = (error) => {
    return {
        type: FETCH_POKEMON_FAILURE,
        payload: error
    }
}

const fetchPokemon = (valor) => {

    return(dispatch) => {
        dispatch(fechPokemonRequest());
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${valor}`)
            .then(response => {
                dispatch(fechPokemonSuccess([response.data]));
            })
            .catch(error => {
                dispatch(fechPokemonFailure('No se encontro el pokemon'));
            })
    }
}

export default fetchPokemon;