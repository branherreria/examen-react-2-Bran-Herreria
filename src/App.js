import React from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { PaginasApp } from './data/PaginasApp';
import Barra from './data/Barra';

export default function App() {
  return (
    <Router>
      <Barra />
      {PaginasApp.map((item) => {
        return (
          <Route
            key={item.id}
            path={item.path}
            exact
            component={item.component}
          />
        );
      })}
    </Router>
  );
}
