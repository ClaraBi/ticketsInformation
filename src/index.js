import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import todoApp from './reducers';
import App from './components/App';
import reducers from './reducers/index'

import promiseMiddleware from 'redux-promise';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);



//let store = createStore(todoApp)

ReactDOM.render(
  //<Provider store={store}>
  <Provider store={createStoreWithMiddleware(todoApp)}>
    <App /> 
  </Provider>,
  document.getElementById('root')
)

