import React from 'react';
import { render } from 'react-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux'
import {rootReducer} from './redux/rootReducer';
import thunk  from 'redux-thunk';
import App from './App';
import reportWebVitals from './reportWebVitals';



const store = createStore(rootReducer, compose(
  applyMiddleware(thunk), 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ))




render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
