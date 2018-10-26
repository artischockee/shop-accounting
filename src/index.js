import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.sass';
import rootReducer from './reducers';
import { closeAddProdDialog } from './actions';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

document.addEventListener('keyup', (event) => {
  if (
    store.getState().showAddProdDialog === true
    && event.key === 'Escape'
  ) {
    store.dispatch(closeAddProdDialog());
  }
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
