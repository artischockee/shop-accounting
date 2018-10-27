import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import dialogs from './dialogs';
import displayAppMenu from './displayAppMenu';
import displayMenuForId from './displayMenuForId';
import products from './products';
import searchValue from './searchValue';

export default combineReducers({
  dialogs,
  displayAppMenu,
  displayMenuForId,
  products,
  searchValue,
  form: formReducer
});
