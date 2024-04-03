import React from 'react'
import './beneficios.css'


//importación de iconos para div plataformas
import google from '../../assets/beneficios/google.png';
import linkedin from '../../assets/beneficios/linkedin.png';
import meta from '../../assets/beneficios/meta.png';
import tiktok from '../../assets/beneficios/tiktok.png';
import x from '../../assets/beneficios/x.png';

const Beneficios = () => {
  return (
    <div className='beneficios'>
      <section>
        <div className='w-card'>
          <div className='card-body'>
            <h3>Reducción del costo</h3>
            <p className='first-p'>El marketing digital es una estrategia eficaz que reduce significativamente los costos de inversión.</p>
            <p>Las herramientas y plataformas digitales son mucho mas asequibles que los metodos tradicionales y tienen mayor alcance.</p>
          </div>
        </div>
        <div className='plataformas'>
          <img src={google} alt="google logo" />
          <img src={meta} alt="meta logo" />
          <img src={linkedin} alt="linkedin logo" />
          <img src={tiktok} alt="tiktok logo" />
          <img src={x} alt="X logo" />
        </div>
        <div className='w-card'>
          <div className='card-body'>
            <h3>Reducción del tiempo</h3>
            <p className='first-p'>Las herramientas de análisis y seguimiento permiten identificar y entender a su público objetivo de manera más rápida y precisa.</p>
            <p>El SEO y la publicidad en línea pueden atraer a clientes potenciales de manera más eficiente haciendo que ahorre tiempo y esfuerzo.</p>
          </div>
        </div>
      </section>
      <section>
        <div className='p-card'>
          <h4>Beneficios</h4>
          <h3>Conexión Directa</h3>
          <p>Genere interacción con su audiencia mejorando el intercambio y la calidad de sus respuestas.</p>
        </div>
        <div className='p-card'>
          <h4>Beneficios</h4>
          <h3>Planeación y Estrategía</h3>
          <p>Saque el máximo provecho a sus recursos estableciendo metas claras y reales para llevar su negocio al siguiente nivel.</p>
        </div>


      </section>
    </div>
  )
}

export default Beneficios