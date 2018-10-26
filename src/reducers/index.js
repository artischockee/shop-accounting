import { combineReducers } from 'redux';
import products from './products';
import searchValue from './searchValue';
import dialogs from './dialogs';

export default combineReducers({
  products,
  searchValue,
  dialogs
});
