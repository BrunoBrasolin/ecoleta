import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';
import Thanks from './pages/Thanks';
const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={CreatePoint} path="/cadastrar-ponto" />
      <Route component={Thanks} path="/obrigado" />
    </BrowserRouter>
  );
};

export default Routes;
