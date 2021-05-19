import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import { createStore } from 'redux';

const initialState = 2;
const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'RAND':
      return Math.floor(Math.random() * 10);
        default:
          return state;
  }
}

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App/>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();
