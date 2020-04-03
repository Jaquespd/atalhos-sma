import React from 'react';

import Header from '../src/components/Header';
import BlockLinks from '../src/components/BlockLinks';
import Divisor from '../src/components/Divisor';
import Certidoes from '../src/components/Certidoes';

import {
  dataAdministrativos,
  dataOperacional,
  dataOutros
} from './database/linkList';

import GlobalStyles from '../src/styles/global';

function App() {
  return (
    <div className="App">
      <Header />
      <Certidoes />
      <Divisor title="Administrativo" />
      <BlockLinks data={dataAdministrativos} />
      <Divisor title="Operacional" />
      <BlockLinks data={dataOperacional} />
      <Divisor title="Outros" />
      <BlockLinks data={dataOutros} />
      <GlobalStyles />
    </div>
  );
}

export default App;
