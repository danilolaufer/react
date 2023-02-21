import React, {useState} from 'react'
import zapatillas from "./zapatillas/zapatillas";

const prendas = () => {
    const [prendas, setPrendas] =useState([
    {
        id: 1,
        name: "New Balance 550",
        role: "Zapatilla",
        img: "../assets/nw550.png",
      },

      {
        id: 2,
        name: "New Balance 990",
        role: "Sandalias playa",
        img: "",
      },

      {
        id: 3,
        name: "New Balance 880",
        role: "Urban style",
        img: "",
      },

    ]);

    return (
    <div className="fila">
        {prendas.map((prendas) =>{
            return (
            <zapatillas 
            key={zapatillas.id}
            name={zapatillas.name}
            img={zapatillas.img}
            role={zapatillas.role}
            />
          );
        })}
    </div>
      )
    }

export default prendas
