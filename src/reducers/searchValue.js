import { SEARCH_VALUE_CHANGE } from '../actions';

const searchValue = (state = '', action) => {
  switch (action.type) {
    case SEARCH_VALUE_CHANGE:
      return action.value;
    default:
      return state;
  }
};

export default searchValue;
