import { useState } from 'react';
import React from 'react';
import "./Navbar.css"
import { Link } from 'react-router-dom';

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
          <Link to={"/"}>
              <img src="../nwlogo.png" className="logo" alt="new balance" />
          </Link>
          <Link to={"zapatillas"} className='navbar'>
          <a className='navbarunit'>Zapatillas</a>
          </Link >
          <Link  className='navbar'>
          <a className='navbarunit'>Ropa</a>
          </Link>  
          <Link  className='navbar'>
          <a className='navbarunit'>Novedades</a>
          </Link>
          <div className='navbar'>
            <p>{contador}</p>
            <img className=" carrito" src="./cart.png" alt="carrito de compras" />
            <button className="btn" onClick={suma}>Comprar</button>
            <button className="btn" onClick={reset}>Reset</button>    
          </div>
        </nav>
    </div>
    )
}

export default Navbar;

