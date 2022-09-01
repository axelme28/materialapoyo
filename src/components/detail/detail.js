import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Datacontext } from "../../context/Dataprovied";

export const Detail = () => {
  const value = useContext(Datacontext);

  const [menu, setMenu] = value.menu;

  const [Cart, setCart] = value.Cart;

  const [total] = value.total;

  const isA = () => {
    setMenu(false);
  };

  const s1 = menu ? "carts show" : "carts";
  const s2 = menu ? "cart show" : "cart";

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
    if (window.confirm("¿Desae eliminar del carrito?")) {
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
    <>
      <div className="container-sm justify-content-center align-items-center">
        {Cart.map((Product) => (
          <div className="cart-item" key={Product.id} >
            <img src={Product.image} alt=""></img>
            <div>
              <h3>{Product.title}</h3>
              <p> precio ${Product.price}</p>
            </div>
            <div>
              <p> Cantidad {Product.cantidad}</p>
            </div>
            <div className="remove-item" onClick={() => removeItem(Product.id)}>
              <box-icon name="trash"></box-icon>
            </div>
          </div>
        ))}
        <h3>total: ${total}</h3>
        <button className="btn btn-success">Finalizar compra</button>
      </div>
    </>
  );
};
