import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.sass';
import rootReducer from './reducers';
import { closeCurrentDialog, addAsyncLoadedImage } from './actions';
import App from './containers/App';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

const isAnyDialogOpened = (dialogsObj) => (
  Object.values(dialogsObj).some((dialog) => (
    typeof dialog === 'object'
      ? Object.values(dialog).some(d => d)
      : dialog
  ))
);

document.addEventListener('keyup', (event) => {
  if (
    isAnyDialogOpened(store.getState().dialogs)
    && event.key === 'Escape'
  ) {
    store.dispatch(closeCurrentDialog());
  }
});

store.getState().products.forEach((product) => {
  fetch('https://picsum.photos/g/192/?random')
    .then(response => {
      store.dispatch(addAsyncLoadedImage(product.id, response.url));
    });
});
