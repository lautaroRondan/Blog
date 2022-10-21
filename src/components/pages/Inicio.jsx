import React from 'react'
import { Link } from 'react-router-dom'


const Inicio = () => {
  return (
    <div className='jumbo'>
      <h1>Bienvenidos a mi blog</h1>
      <p>desarrollado con recat, node y mongodb</p>
      <Link to="/articulos" className='button'>Ver los articulos</Link>
    </div>
  )
}

export default Inicio
