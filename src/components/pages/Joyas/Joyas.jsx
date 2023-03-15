import React from 'react'
import { useParams } from 'react-router-dom';

const Joyas = ({ productos }) => {
    const { category } = useParams();
    const producto = productos.find((producto) => producto.category == "jewelery");
  return (
    <div>
    <h4>{producto.title}</h4>
      <img src={producto.image} alt="" width={200} />
      <h2>{producto.category}</h2>
      <p>{producto.description}</p>
      <p>$ {producto.price}</p>
    </div>
  )
}

export default Joyas