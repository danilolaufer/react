import React, { useState } from 'react'

const Cart = () => {
    const [contador, setContador] = useState(0)
    const suma = () => {
      setContador(contador + 1);
    
    
  }; 
    const reset = () => {
        setContador(0);
      };
  return (
    <div className='navbar'>
        <p>{contador}</p>
        <img className=" carrito" src="../public/cart.png" alt="carrito de compras" />
        <button className="btn" onClick={suma}>Comprar</button>
        <button className="btn" onClick={reset}>Reset</button>    
    </div>
  )
}

export default Cart