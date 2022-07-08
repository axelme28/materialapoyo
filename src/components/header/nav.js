import React from 'react';
import Homero from '../../imgs/Homero.jpg';
import { Link } from 'react-router-dom';
import "boxicons";


const Nav = () => {
  return (
    <header>
    <Link to='/'>
      <div className='logo'>
        <img src={Homero} alt='logo' width="100" height="100"></img>
      </div>
    </Link>
    <ul>
      <li>
        <Link to='/'>Inicio</Link>
      </li>
      <li>
        <Link to='/products'>productos</Link>
      </li>
    </ul>
    <div className='cart' >
    <box-icon name='cart'></box-icon>
    <span className='totalItem'>0</span>
    </div>

  </header>
  )
}

export default Nav