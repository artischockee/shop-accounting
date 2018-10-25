import { combineReducers } from 'redux';
import products from './products';
import searchValue from './searchValue';

export default combineReducers({
  products,
  searchValue
});
