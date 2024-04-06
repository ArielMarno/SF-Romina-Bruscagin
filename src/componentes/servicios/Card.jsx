import React from 'react'
import './card.css'

const Card = ({imagen, title, text}) => {
  return (
    <div className='card'>
      <img src={imagen} alt="" />
      <div className='card-body'>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Card