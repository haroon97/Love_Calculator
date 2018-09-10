import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes';
import store from './store/configureStore';
import { Provider } from 'react-redux'

const jsx = 
  <Provider store={store}>
    <Routes />
  </Provider>

ReactDOM.render(jsx, document.getElementById('root'));


