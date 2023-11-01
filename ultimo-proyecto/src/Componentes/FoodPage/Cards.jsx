import React, { useState } from 'react'
import './card.css'

const Cards = ({imagen, titulo,description, price}) => {
 
  const [added, setAdded] = useState(false)

  const clickAdd = () =>{
    setAdded(true)
  }
  const clickDelete = () =>{
    setAdded(false)
  }

  return (
    <div className="container">

    <div className='cardd'>
      <img src={imagen} alt={titulo} className="cardd-img" />
      <div className="cardd-contenido">
        <h3 className="cardd-titulo">{titulo}</h3>
        <p className="cardd-description">{description}</p>
        <p className="cardd-price">{price}</p>
      {added 
      ? <button 
      type="button" 
      className="boton-delete"
      onClick={clickDelete}
      >
        Eliminar
      </button> 
      :  <button 
      type="button" 
      className="boton-add"
      onClick={clickAdd}
      >
      Agregar
    </button> 
      
      }
      </div>

    </div>
    </div>
  )
}

export default Cards

