import React from 'react'
import './footer.css'

import linkedin from '../../assets/footer/in.png';
import instagram from '../../assets/footer/ig.png';
import whatsapp from '../../assets/footer/wp.png';
import mail from '../../assets/footer/mail.png';
const Footer = () => {
  return (
    <footer>
      <div className='contenedor'>
        <section>
          <h2>Bruscagin Romina</h2>
          <article>
            <p><span>Servicios de </span>Marketing Digital <br /> Social Media Manager <br /> Community Manager</p>
          </article>
          <div className='contenedor-redes'>
            <a href="https://www.linkedin.com/in/romina-bruscagin-digital/" target='_blank' rel="noopener noreferrer"><img src={linkedin} alt="icono linkedin" /></a>
            <a href="https://www.instagram.com/rominabruscagindigital" target='_blank' rel="noopener noreferrer"><img src={instagram} alt="icono instagram" /></a>
            <a href="https://wa.me/5492974163066" target='_blank' rel="noopener noreferrer"><img src={whatsapp} alt="icono whatsapp" /></a>
            <a href="mailto:rominabruscagindigital@gmail.com"><img src={mail} alt="icono arroba" /></a>
          </div>
        </section>

        <div className='nav-footer'>
          <h4>Navegador</h4>
          <a href="#inicio">Inicio</a>
          <a href="#beneficios">Beneficios</a>
          <a href="#novedades">Novedades</a>
          <a href="#servicios">Servicios</a>
          <a href="#contacto">Contacto</a>
        </div>
      </div>


      <div className='copy'>
        <p>Diseñado y desarrollado por <span>Sunflower Agencia Digital.</span></p>
        <p>Copyright© 2024 <span>Bruscagin Romina Marketing Digital</span>. Todos los derechos reservados.</p>
      </div>

    </footer>
  )
}

export default Footer