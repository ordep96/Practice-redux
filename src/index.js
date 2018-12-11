import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/';
import thunk from 'redux-thunk';

const store = createStore(
  reducers,
  {},
  applyMiddleware(
    thunk
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'));

