import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from 'serviceWorker';

import ErrorBoundary from 'components/ErrorBoundary';
import Root from 'main/Root';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Root />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
