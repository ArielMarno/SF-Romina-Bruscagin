import React from 'react'
import './inicio.css'
import fondo from '..//..//assets/Inicio/fondo.png';
const Inicio = () => {
  return (
    <div className='inicio' id='inicio' style={{ backgroundImage: `url(${fondo})` }}>
      <h2>Soluciones Digitales <br /> Orientadas al <span>Futuro</span></h2>
      <p>Incremente sus ventas atrayendo clientes potenciales con una estrategia de marketing ajustada a su modelo de negocio</p>
      <div className='contenedor-btn'>
        <a className='btn' href="#">Ver Servicios</a>
        <a className='btn-alt' href="#">Novedades</a>
      </div>
    </div>
  )
}

export default Inicio