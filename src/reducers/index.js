import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import products from './products';
import searchValue from './searchValue';
import dialogs from './dialogs';
import appMenu from './appMenu';

export default combineReducers({
  appMenu,
  products,
  searchValue,
  dialogs,
  form: formReducer
});
