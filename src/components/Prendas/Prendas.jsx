import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Zapatillas from "./Zapatillas/Zapatillas";

const Prendas = () => {
    const [prendas, setPrendas] =useState([
      
    {
        id: 1,
        name: "New Balance 550",
        role: "99$ ",
        img: "./nw550.jpg",
        buy: "COMPRAR"
      },

      {
        id: 2,
        name: "New Balance 990",
        role: "99$",
        img: "./nw9000.jpg",
        buy: "COMPRAR"
      },

      {
        id: 3,
        name: "New Balance 880",
        role: "99$",  
        img: "./nwrunm.jpg",
        buy: "COMPRAR"
      },

    ]);

    return (
      <Link to={"${zapatillas.id}"}>
              <div className="cuadro">
        {prendas.map((zapatillas) =>{
          return(
          <div>
              <Zapatillas 
            key={zapatillas.id}
            name={zapatillas.name}
            img={zapatillas.img}
            role={zapatillas.role}
            buy={zapatillas.buy}
            />
          </div>            
          );
        })}
    </div>
      </Link>

      )
    }

export default Prendas;