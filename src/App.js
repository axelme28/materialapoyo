import React from 'react';
import { Dataprovied } from '../src/context/Dataprovied';
import 'boxicons';

import { Pages } from './components/pages';

function App() {
  return (
    <div className='App'>
      <Dataprovied>
        <Pages />
      </Dataprovied>
    </div>
  );
}

export default App;
