import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import store from 'redux-react/store';

import {CssBaseline} from '@material-ui/core';

import Routes from './Routes';

const Root: React.FC = () => {
  return (
    <Provider store={store}>
      <CssBaseline />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
