//importo las actions

import { GET_POKEDETAIL, GET_POKEMONS, SEARCH_BY_ID, SEARCH_BY_NAME } from "./constants";

const initialState = {
    pokemons: [],
    poke: {}
};

export default function reducer(state= initialState, action){
    switch(action.type){
        case GET_POKEMONS: return{
            ...state, 
            pokemons: action.payload
        };
        case GET_POKEDETAIL: return{
            ...state, 
            poke: action.payload
        }
        case SEARCH_BY_NAME: return {
            ...state, 
            poke: action.payload
        }
        case SEARCH_BY_ID: return {
            ...state, 
            poke: action.payload
        }
        default:
            return {
                ...state,
            }
    }
}