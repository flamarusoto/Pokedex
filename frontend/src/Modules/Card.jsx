import React from "react";
import { Link } from 'react-router-dom'

export default function Card(props){
    const { pokemon } = props;

    return(
        <div className="pokemon-card">
            <Link to={`/pokeDetail/${pokemon.id}`}>
            <div className="pokemon-img-container">
            <img
                className="pokemon-img"
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
            />
            </div>
           <div className="card-body">
            <div className="card-top">
                <h3>{pokemon.name}</h3>
                </div>
                <div>#{pokemon.id}</div>
            </div>
            <div className="card-bottom">
                <div className="pokemon-type">
            {pokemon.types.map((type, idx) => {
              return (
                <div key={idx}>
                  {type.type.name}
                </div>
              );
            })}
            </div>
            </div>
            </Link>
        </div>
    )
}