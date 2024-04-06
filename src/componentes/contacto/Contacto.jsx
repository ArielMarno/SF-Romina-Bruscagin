import React from 'react'
import './contacto.css';

import contacto from '../../assets/contacto/contacto.png';
const Contacto = () => {
  return (
    <div className='contacto' id='contacto'>
        <div className='contenedor'>
            <div className='img-contenedor'>
                <img src={contacto} alt="smartphone" />
            </div>
            <article>
                <h2>Impulsa tu negocio hacia el éxito</h2>
                <div className='contenedor-btn'>
                    <a href="https://forms.gle/KXdiAmx6arDcbVsE8" target='_blank' rel="noopener noreferrer" className='btn'>Empecemos</a>
                    <a href="https://wa.me/5492974163066" target='_blank' rel="noopener noreferrer" className='btn-alt'>Mas información</a>
                </div>
            </article>
        </div>
    </div>
  )
}

export default Contacto