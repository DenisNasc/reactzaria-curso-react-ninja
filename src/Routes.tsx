import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from 'pages/Home';
import Login from 'pages/Login';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
