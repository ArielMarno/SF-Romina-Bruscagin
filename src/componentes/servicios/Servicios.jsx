import React from 'react'
import './servicios.css'

//importación de iconos para tarjetas

import asesorias from '../../assets/servicios/serv-aseso.png';
import campañas from '../../assets/servicios/serv-camp.png';
import email from '../../assets/servicios/serv-email.png';
import media from '../../assets/servicios/serv-media.png';
import redes from '../../assets/servicios/serv-redes.png';
import seo from '../../assets/servicios/serv-seo.png';

import Card from './Card';
const Servicios = () => {
  return (
    <div className='servicios' id='servicios'>
      <h3>Mis Servicios</h3>
      <div className='card-contenedor'>
        <Card imagen={redes} title="Redes Sociales" text="Gestión y administración de contenido: Instagram, X, Facebook, Tik Tok y LinkedIn."/>
        <Card imagen={media} title="Creación Multimedia" text="Diseño de imágenes y textos convincentes
        enfocados en conectar con tu audiencia."/>
        <Card imagen={campañas} title="Campañas" text="Determine sus objetivos, defina su audiencia y elija los canales de publicidad adecuados. Anuncios atractivos y adaptados a sus recursos."/>
        <Card imagen={seo} title="SEO Google" text="Implementación de técnicas para mejorar su posicionamiento en los motores de búsqueda."/>
        <Card imagen={asesorias} title="Asesorías" text="Orientación personalizada para potenciar su presencia digital. Alcance sus objetivos comerciales con una estrategia efectiva."/>
        <Card imagen={email} title="Email Marketing" text="Promocione ofertas, informe sobre nuevos lanzamientos y mantenga un contacto directo con sus clientes. "/>
      </div>
    </div>
  )
}

export default Servicios