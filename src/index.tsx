import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {CssBaseline} from '@material-ui/core';

import * as serviceWorker from 'serviceWorker';

import Routes from 'Routes';
import ErrorBoundary from 'components/ErrorBoundary';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />

    <BrowserRouter>
      <ErrorBoundary>
        <Routes />
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
