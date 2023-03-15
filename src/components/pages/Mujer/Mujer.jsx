import React from 'react'
import { useParams } from 'react-router-dom';

const Mujer = ({ productos }) => {
    const { category } = useParams();
    const producto = productos.find((producto) => producto.category == "women's clothing");
  return (
    <div className='cuadro'>
        <h4>{producto.title}</h4>
        <img src={producto.image} alt="" width={200} />
        <h2>{producto.category}</h2>
        <p>{producto.description}</p>
        <p>$ {producto.price}</p>
    </div>
  )
}

export default Mujer