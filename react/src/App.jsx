import { useState,useEffect} from 'react'
import react from "react"
import reactLogo from './assets/nwlogo.png'
import reactLogo1 from './assets/cart.png'
import prendas from './components/prendas/prendas';

import './App.css'

function App() {
  const [contador, setContador] = useState(0)

  const suma = () => {
    setContador(contador + 1);
  };

  const reset = () => {
    setContador(0);
  };

  return (
    <div className="App">
      <header>
        <nav className="bossnav">
        <a href="#" target="_blank">
          <img src="./nwlogo.png" className="logo" alt="new balance" />
        </a>
        <ul className="navbar">
          <li href="#" className="navbarunit">Novedades</li>
          <li  href="#" className="navbarunit">Hombre</li>
          <li  href="#" className="navbarunit">Mujer</li> 
          <p>{contador}</p>
          <img className=" carrito" src="./cart.png" alt="carrito de compras" />
          <button className="btn" onClick={suma}>Agregar</button>
          <button className="btn" onClick={reset}>Reset</button>
          </ul>       
        </nav>
        
      </header>
      <div className="container">
        <prendas />
      </div>
    </div>

  )
}

export default App;
