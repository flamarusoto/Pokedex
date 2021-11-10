import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { searchPokemon, searchById } from '../Redux/actions';


const Searchbar = () => {
//   const { onSearch } = props;
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onClick = async(e) => {
      const data = await searchPokemon(search);
    //dispatch(searchByName(search));
    // dispatch(searchById(search));
    // let inputId = document.getElementById("dataInput");
    // inputId.value = "";
    
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input placeholder="Buscar pokemon..." onChange={onChange} />
      </div>
      <div className="searchbar-btn">
        <button onClick={onClick}>🔍</button>
      </div>
    </div>
  );
};

export default Searchbar;

