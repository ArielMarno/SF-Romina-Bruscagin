import React from 'react'
import './barra.css';

import publicidad from '../../assets/barra/publicidad.png';
import clientes from '../../assets/barra/clientes.png';
import ventas from '../../assets/barra/ventas.png';

const Barra = () => {
  return (
    <div className='barra'>
        <div className='box'> 
            <img src={publicidad} alt="icono alcance" />
            <p>Expanda su alcance a través de <span>campañas publicitarias</span></p>
        </div>
        <div className='box'> 
            <img src={clientes} alt="icono radar" />
            <p>Reconozca en su audiencia a sus <span>potenciales clientes</span></p>
        </div>
        <div className='box'> 
            <img src={ventas} alt="icono grafico" />
            <p>Reduzca su inversión para <span>concretar ventas</span></p>
        </div>
    </div>
  )
}

export default Barra