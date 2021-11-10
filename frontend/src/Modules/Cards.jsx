import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPokemons } from "../Redux/actions";

import Card from './Card';
import Pagination from './Pagination';

export default function Cards(props){
    const { pokemons } = props;
    console.log(pokemons)
        // const pokemons = useSelector(state => state.pokemons)

        // const dispatch = useDispatch();

        // const [currentPage, setCurrentPage] = useState(1);
        // const [pokesPerPage] = useState(9);
        // // Paginacion
        // const indexOfLastPokes = currentPage * pokesPerPage //9
        // const indexOfFirstPokes = indexOfLastPokes - pokesPerPage //9 -9
        // const currentPokes = pokemons?.slice(indexOfFirstPokes, indexOfLastPokes)

        // useEffect(()=> {
        //     dispatch(getPokemons())
        // }, [dispatch])

        // const paginate = pageNumber => setCurrentPage(pageNumber);

        return(
            <div>
                <div>Pokedex</div>
                <div className="pokedex-grid">
                    {pokemons.map((pokemon, idx) =>{
                         return(
                            <Card pokemon={pokemon} key={pokemon.name} />
                        )
                    }
                   )}                   
                </div>
            </div>
        )
}

{/* //                 <div >
//                 {currentPokes? currentPokes.map((p)=>{
//                     return(
//                         <Card
//                             id={p.id}
//                             name={p.name}
//                             img src={p.sprites.front_default}
//                             alt={p.name}
//                             type={p.type}
//                         />
//                     )
//                 }) : <h2>Loading..</h2>}
//                 </div>
//                 <div>
//                     <Pagination paginate={paginate} pokesPerPage={pokesPerPage} totalPokes={pokemons?.length}/>
//                 </div> */}
