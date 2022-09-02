import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Datacontext } from '../../context/Dataprovied';

export const Detail = () => {
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

  return (
    <div className='container-sm justify-content-center align-items-center' style={{ zIndex: '1' }}>
      <div style={{ marginTop: '10rem' }}>
        {Cart.map((Product) => (
          <div class='card m-4' style={{ width: '18rems' }} key={Product.id}>
            <img src={Product.image} class='card-img-top' alt='...' />
            <div class='card-body'>
              <h5 class='card-title'>{Product.title}</h5>
              <p class='card-text'>
                {Product.tallas} - {Product.color}
              </p>
              <div className='remove-item' onClick={() => removeItem(Product.id)}>
                <box-icon name='trash'></box-icon>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h3>total: ${total}</h3>
      <button className='btn btn-success'>Finalizar compra</button>
    </div>
  );
};
