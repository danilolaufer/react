import React from 'react'
import "./Navbar.css"

const ItemListContainer = (props) => {
  return (
    <div className='bossnav'>
    <ul className='navbar'>
        <li className='navbarunit'>{props.itemUno}</li>
        <li className='navbarunit'>{props.itemDos}</li>
        <li className='navbarunit'>{props.itemTres}</li> 
    </ul>
    </div>

  )
}

export default ItemListContainer