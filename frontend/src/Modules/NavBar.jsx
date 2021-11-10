import React from "react";
import { Link } from "react-router-dom";
import Searchbar from "./SearchBar";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { Link } from 'react-dom'
// import { searchByName } from "../Redux/actions";

// export default function NavBar(){
//     const dispatch = useDispatch();
//     const [name, setName] = useState("");

//     const handleInputChange = (e) => {
//         e.preventDefault();
//         setName(e.target.value);
//     }
//     const handleClick = (e) => {
//         e.preventDefault();
//         dispatch(searchByName(name));
//         let inputId = document.getElementById("dataInput");
//         inputId.value = "";
//     }
//     return(
//         <div>
//             <Link to='/'>
//                 <img></img>
//             </Link>
//             <SearchBar />
//         </div>
//     )
// }
export default function NavBar(){
    const imgUrl = "https://1000marcas.net/wp-content/uploads/2020/01/Logo-Pokemon-500x313.png"
    return(
        <nav>
            <div className="nav-container">
            <div>
                <Link to='/'>
            <img src={imgUrl}
            alt="Pokedex" 
            className="navbar-image"/>
                </Link>
            </div>
            <Searchbar />
            </div>
        </nav>
    )
}