import React from 'react';


export default function Pagination({ pokesPerPage, totalPokes, paginate }) {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPokes/ pokesPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div>
           
            {pageNumbers.map(n => (
                 
                        <button onClick={() => paginate(n)}>
                            {n}
                        </button>    
            
                ))}    
            
               
        </div>
    )
}
