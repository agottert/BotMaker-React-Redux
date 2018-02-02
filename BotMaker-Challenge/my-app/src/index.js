import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import appReducer from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { agregarUsuario, borrarUsuario } from './actions';

let store = createStore(appReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)// el componente App, y donde se renderea

registerServiceWorker();
