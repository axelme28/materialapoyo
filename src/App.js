import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { Nav } from '../src/components/header/nav';
import { Pages } from '../src/components/pages';
import { Carrito } from '../src/components/cart/cart';
import { Dataprovied } from '../src/context/Dataprovied';
import "boxicons";


function App() {
  return (
    <Dataprovied>
      <div className="App">
        <Router />
      </div>
    </Dataprovied>
  );
}

export default App;
