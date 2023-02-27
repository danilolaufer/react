import { useState } from 'react';
import React from 'react';
import ItemListContainer from './ItemListContainer';
import "./Navbar.css"

const Navbar = () => {
    const [contador, setContador] = useState(0)
    const suma = () => {
      setContador(contador + 1);
    
    
  }; 
    const reset = () => {
        setContador(0);
      };
return (
    <div>
        <nav className="bossnav">
        <a href="#" target="_blank">
            <img src="../nwlogo.png" className="logo" alt="new balance" />
        </a>
        <ItemListContainer
          itemUno="Hombres"
          itemDos="Mujeres"
          itemTres="Novedades">
        </ItemListContainer>
              <p>{contador}</p>
            <img className=" carrito" src="./cart.png" alt="carrito de compras" />
            <button className="btn" onClick={suma}>Comprar</button>
            <button className="btn" onClick={reset}>Reset</button>    
        </nav>
    </div>
    )
}

export default Navbar;

