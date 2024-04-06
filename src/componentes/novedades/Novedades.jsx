import React from 'react'
import './novedades.css'

import linkedin from '../../assets/novedades/nov-linkedin.png';
const Novedades = () => {
  return (
    <div className='novedades' id='novedades'>
      <div className='linkedin'>
          <div className='contenedor'>
            <img src={linkedin} alt="logo linkedin en 3d" />
          </div>
          <article>
            <h4>Novedades</h4>
            <h2><span>↑</span> LinkedIn</h2>
            <p>Aumente su visibilidad en la mayor red profesional online a nivel mundial. Un perfil completo puede ayudarlo a conectar con su público y generar oportunidades de negocio.</p>
            <a href="https://forms.gle/KXdiAmx6arDcbVsE8" target='_blank' rel="noopener noreferrer" className='btn'>Empecemos</a>
          </article>
      </div>
    </div>
  )
}

export default Novedades