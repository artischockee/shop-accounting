import { Products } from '../actions';

const products = (state = [], action) => {
  switch (action.type) {
    case Products.ADD_PRODUCT:
      break;
    default:
      return state;
  }
};

export default products;
