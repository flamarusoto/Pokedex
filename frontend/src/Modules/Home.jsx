import React, { useEffect, useState } from "react";
import { getPokemons, getPokemonData } from "../Redux/actions";

import NavBar from "./NavBar";
import Cards from "./Cards";
import { useDispatch } from "react-redux";

export default function Home (){
    const [pokemons, setPokemons] = useState([]);
    const dispatch = useDispatch();

    const fetchPoke = async () => {
        try{
            const data = await getPokemons();
            const promises = data.results.map(async (p) => {
                return await getPokemonData(p.url)
            })
            const results = await Promise.all(promises)
            setPokemons(results)
        }
        catch(err){}
    }
    useEffect(() => {
        //dispatch(getPokemons())
        fetchPoke()
    }, [])

   return(
       <div>
           <NavBar />
            <Cards pokemons={pokemons}/>

       </div>
   )
}