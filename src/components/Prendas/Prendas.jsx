import React, {useState} from 'react'
import Zapatillas from "./Zapatillas/Zapatillas";

const Prendas = () => {
    const [prendas, setPrendas] =useState([
      
    {
        id: 1,
        name: "New Balance 550",
        role: "Zapatilla 99$",
        img: "./nw550.jpg",
      },

      {
        id: 2,
        name: "New Balance 990",
        role: "Zapatilla 99$",
        img: "./nw9000.jpg",
      },

      {
        id: 3,
        name: "New Balance 880",
        role: "Zapatilla 99$ ",
        img: "./nwrunm.jpg",
      },

    ]);

    return (
    <div className="cuadro">
        {prendas.map((zapatillas) =>{
            return (
            <div>
              <Zapatillas 
            key={zapatillas.id}
            name={zapatillas.name}
            img={zapatillas.img}
            role={zapatillas.role}
            />
            </div>
            
          );
        })}
    </div>
      )
    }

export default Prendas;