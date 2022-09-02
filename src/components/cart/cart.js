import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Datacontext } from '../../context/Dataprovied';

export const Carrito = () => {
  const value = useContext(Datacontext);

  const [menu, setMenu] = value.menu;

  const [Cart, setCart] = value.Cart;

  const [total] = value.total;

  const isA = () => {
    setMenu(false);
  };

  const s1 = menu ? 'carts show' : 'carts';
  const s2 = menu ? 'cart show' : 'cart';

  const removeI = (id) => {
    Cart.forEach((item) => {
      if (item.id === id) {
        item.cantidad === 1 ? (item.cantidad = 1) : (item.cantidad -= 1);
      }
      setCart([...Cart]);
    });
  };

  const addI = (id) => {
    Cart.forEach((item) => {
      if (item.id === id) {
        item.cantidad += 1;
      }
      setCart([...Cart]);
    });
  };

  const removeItem = (id) => {
    if (window.confirm('¿Desae eliminar del carrito?')) {
      Cart.forEach((item, index) => {
        if (item.id === id) {
          item.cantidad = 1;
          Cart.splice(index, 1);
        }
      });
      setCart([...Cart]);
    }
  };

  const goToDetail = () => {
    Navigate('/detail');
  };

  return (
    <div className={s1}>
      <div className={s2}>
        <div className='cart-close' onClick={isA}>
          <box-icon name='x'></box-icon>
        </div>
        <h2>Su carrito</h2>

        <div className='cart-center'>
          {Cart.length === 0 ? (
            <h2
              style={{
                textAlign: 'center',
                fontSize: '3rem',
              }}>
              No hay elementos
            </h2>
          ) : (
            <>
              {Cart.map((Product) => (
                <div className='cart-item' key={Product.id}>
                  <img src={Product.image} alt=''></img>
                  <div>
                    <h3>{Product.title}</h3>
                    <p className='price'>${Product.price}</p>
                  </div>
                  <div>
                    <box-icon
                      name='up-arrow'
                      type='solid'
                      onClick={() => addI(Product.id)}></box-icon>
                    <p className='cantidad'>{Product.cantidad}</p>
                    <box-icon
                      name='down-arrow'
                      type='solid'
                      onClick={() => removeI(Product.id)}></box-icon>
                  </div>
                  <div className='remove-item' onClick={() => removeItem(Product.id)}>
                    <box-icon name='trash'></box-icon>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        <div className='footer-cart'>
          <h3>total: ${total}</h3>
          <Link to='/detail' className='btn btn-primary' onClick={isA}>
            Comprar
          </Link>
        </div>
      </div>
    </div>
  );
};
