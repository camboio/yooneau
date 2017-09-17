import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';
import * as types from './actions/types';

const createStoreWithMiddleware = applyMiddleware()(createStore);
export const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.react-container'));
