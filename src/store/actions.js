
import axios from 'axios'

export const SEARCH_BY_VALUE = 'SEARCH_BY_VALUE'
export const SET_POKEMONS = 'SET_POKEMONS'
export const GO_TO_LIST_BACK = 'GO_TO_LIST_BACK'
export const GO_TO_DETAILS_BACK = 'GO_TO_DETAILS_BACK'
export const SET_POKEMON_DETAILS = 'SET_POKEMON_DETAILS'
export const SET_ABILITY_DETAILS = 'SET_ABILITY_DETAILS'


export const setPokemons = (pokemons) => {
    return {
        type: SET_POKEMONS,
        pokemons: pokemons
    }
}

export const initPokemons = () => {
    return dispatch => {
        axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then(response => {
                dispatch(setPokemons(response.data.results));
            })
            .catch(error => {
                console.log('An error while getting data!')
            });
    }
}

export const setPokemonDetails = (pokemonDetails) => {
    return {
        type: SET_POKEMON_DETAILS,
        pokemonDetails: pokemonDetails
    }
}

export const initPokemonByUrl = (url) => {
    return dispatch => {
        axios.get(url)
            .then(response => {
                dispatch(setPokemonDetails(response.data))
            })
            .catch(error => {
                console.log('An error while getting data!')
            });
    }
}

// ==


export const setAbilityDetails = (abilityDetails) => {
    return {
        type: SET_ABILITY_DETAILS,
        abilityDetails: abilityDetails
    }
}

export const initAbilityByUrl = (url) => {
    return dispatch => {
        axios.get(url)
            .then(response => {
                dispatch(setAbilityDetails(response.data))
            })
            .catch(error => {
                console.log('An error while getting data!')
            });
    }
}
