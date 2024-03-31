import {React, useState } from 'react'
import './navbar.css'

import Burguer from './Burguer';
const Navbar = () => {
  
  const[click, setClick] = useState(false);
  const handleClick = () =>{
  //setear el booleano opuesto al actual cuando se hace click en el boton
    setClick(!click);
  }

  return (
    <nav>
      <h1>Bruscagin Romina</h1>
      <div className={`links ${click ? 'active' : ''}`}>
        <a href="#">Inicio</a>
        <a href="#">Beneficios</a>
        <a href="#">Servicios</a>
        <a href="#">Contacto</a>
        <a href="#" className='portfolio'>Portafolio</a>
      </div>
      <a className='btn' href="#">Ver Portafolio</a>
      <div className="burguer">
        <Burguer click={click} handleClick={handleClick}/> 
      </div>
      
    </nav>
  )
}

export default Navbar