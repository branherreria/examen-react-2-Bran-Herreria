import React from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { MenuElements } from './data/MenuElements';
import Barra from './data/Barra';

export default function App() {
  return (
    <Router>
      <Barra />
      {MenuElements.map((item) => {
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
