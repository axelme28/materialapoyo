import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Datacontext } from '../../context/Dataprovied';

export const ProductsItem = ({ id, title, price, image, tallas }) => {
  const value = useContext(Datacontext);
  const addCart = value.addCart;

  return (
    <div className='product p-5'>
      <a href='#'>
        <div className='product_img'>
          <img src={image} alt={title}></img>
        </div>
      </a>
      <div className='footerProduct'>
        <h1>{title}</h1>
        <p>{tallas}</p>
        <p className='price'>${price}</p>
      </div>
      <div className=' w-100'>
        <button className='btn btn-danger w-100' onClick={() => addCart(id)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};
