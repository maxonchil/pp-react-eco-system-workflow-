import React from 'react';
import {render} from 'react-dom';
import './styles/index.scss';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import * as serviceWorker from './serviceWorker';

render(
  <React.StrictMode>
      <Provider store={store}>
    <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
