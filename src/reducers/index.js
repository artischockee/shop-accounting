import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import products from './products';
import searchValue from './searchValue';
import dialogs from './dialogs';

export default combineReducers({
  products,
  searchValue,
  dialogs,
  form: formReducer
});
