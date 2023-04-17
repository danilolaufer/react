import React from 'react';
import "./Navbar.css"
import { NavLink } from 'react-router-dom';
import Cart from '../Cart/Cart';

const Navbar = () => { 
    let activeStyle = {
      textDecoration: "none",
    };
    return (
        <nav className="navbar navbar-expand-lg "  >
        <div className="container-fluid">
          <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}>        
        <img  className="logo"src="https://ibb.co/YXKjn4b" alt="" />
        </NavLink>
        <NavLink
          to="productos"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <p className='navbarunit'>Productos</p>
        </NavLink>
        <NavLink
          to="hombre"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <p className='navbarunit'>Hombre</p>
        </NavLink>
        <NavLink
          to="joyas"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <p className='navbarunit'>Joyas</p>
        </NavLink>
        <NavLink
          to="electronica"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <p className='navbarunit'>Electronica</p>
        </NavLink>
        <NavLink
          to="mujer"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <p className='navbarunit'>Mujer</p>
        </NavLink>
        <Cart/>
        </div>
        
      </nav>
      
      
    );
  };
  
  export default Navbar;