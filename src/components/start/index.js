import React from 'react';
import portada from '../../imgs/portada.jpg';
import { Link } from "react-router-dom";

export const Index = () => {
  return (
    <div className='inicio'>
      <Link to="/"> 
      <h1> Inicio </h1>
      </Link>

      <Link to="/products">
        <h1> productos </h1>
      </Link>

      <Link to="/detail">
        <h1> Detalle de compra </h1>
      </Link>

      


      {/* aqui va una imagen de fondo */}
    </div>
  )
}
