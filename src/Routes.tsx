import React, {lazy, Suspense} from 'react';
import styled from 'styled-components';
import {Switch, Route} from 'react-router-dom';

import {CircularProgress} from '@material-ui/core';

const Home = lazy(() => import('pages/Home'));
const Login = lazy(() => import('pages/Login'));

const Routes: React.FC = () => {
  return (
    <Suspense fallback={<StyledCircularProgress />}>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Suspense>
  );
};

const StyledCircularProgress = styled(CircularProgress)`
  position: absolute;
  left: 40vw;
  top: 40vh;
`;

export default Routes;
