import axios from 'axios';
import Card from '../Modules/Card';
import {BASE_URL, GET_POKEDETAIL, GET_POKEMONS, SEARCH_BY_ID, SEARCH_BY_NAME} from './constants';

// export function getPokemons(limit = 25, offset = 0){
//     return async function(dispatch){
//         try{
//             const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
//             dispatch({type: GET_POKEMONS, payload: response.data})
//         }
//         catch(error){dispatch({type:GET_POKEMONS,payload:'Pokemons Not Found'})} 
//     }
// };
export const getPokemons = async (limit = 25, offset = 0) => {
    try {
      let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (err) {}
};
export function getPokeDetail(id){
    return async function(dispatch){
        try{
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            dispatch({type: GET_POKEDETAIL, payload: response.data});
        }
        catch(error){dispatch({type:GET_POKEDETAIL,payload:'Pokemon Not Found'})}  
    }
}
export const searchPokemon = async (pokemon) => {
    try {
      let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (err) {}
  };
// export function searchByName (name){
//     return async function(dispatch){
//         try{
//             const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?name=${name}`)
//             dispatch({type: SEARCH_BY_NAME, payload: response.data})
//         }
//         catch(error){dispatch({type:SEARCH_BY_NAME,payload:`There are no Pokémons named: ${name[0].toUpperCase()+ name.slice(1).toLowerCase()}`})} 
//     }
// }

export function searchById(id){
    return async function(dispatch){
        try{
            const response = await axios.get(BASE_URL + id)
            dispatch({type: SEARCH_BY_ID, payload: response.data})
        }
        catch(error){dispatch({type:SEARCH_BY_ID,payload:'Pokemon Not Found'})} 
    }
}

// export function clear() {
//     return {type: CLEAR}
// };
export const getPokemonData = async (url) => {
    try{
        const response = await fetch(url);
        const data = await response.json();
        return data
    }
    catch(error){}
}