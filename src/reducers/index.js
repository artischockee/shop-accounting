import { combineReducers } from 'redux';
import products from './products';
import searchValue from './searchValue';
import showAddProdDialog from './showAddProdDialog';

export default combineReducers({
  products,
  searchValue,
  showAddProdDialog
});
