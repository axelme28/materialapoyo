import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Index } from './start/index';
import { ListProducts } from './products/product';
import { Detail } from './detail/detail';
import { Nav } from './header/nav';
import { Login } from './login/Login';
import { Carrito } from './cart/cart';

export const Pages = () => {
  return (
    <>
      <section>
        <BrowserRouter>
          <Carrito />
          <Nav>
            <Routes>
              <Route path='/login' element={<Login />} />
              <Route path='/' exact element={<Index />} />
              <Route path='/products' exact element={<ListProducts />} />
              <Route path='/detail' exact element={<Detail />} />
            </Routes>
          </Nav>
        </BrowserRouter>
      </section>
    </>
  );
};
