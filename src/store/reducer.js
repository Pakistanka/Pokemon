import * as actionTypes from './actions'

const initialState = {
    search: '',
    pokemons: null,
    pokemonDetails: '',
    abilityDetails: '',
    pokemonUrl: '',
    
    
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_BY_VALUE:
            return {
                ...state,
                search: action.text,
            };
        case actionTypes.GO_TO_LIST_BACK:
            return {
                ...state,
                pokemonDetails: '',
            };
        case actionTypes.GO_TO_DETAILS_BACK:
            return {
                ...state,
                abilityDetails: '',
            };
        case actionTypes.SET_POKEMONS:
            return {
                ...state,
                pokemons: action.pokemons
            };
        case actionTypes.SET_POKEMON_DETAILS:
            return {
                ...state,
                pokemonDetails: action.pokemonDetails
            }
        case actionTypes.SET_ABILITY_DETAILS:
            return {
                ...state,
                abilityDetails: action.abilityDetails
            }
        default:
            return state;
    }
}
export default reducer