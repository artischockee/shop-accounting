import { Products } from '../actions';

const initialState = [
  {
    id: 1,
    category: 'TV',
    img: null,
    name: 'Philips TV Big screen Smart TV and all the stuff',
    quantity: 113630
  },
  {
    id: 2,
    category: 'House',
    img: null,
    name: 'Vacuum cleaner',
    quantity: 92
  },
  {
    id: 3,
    category: 'TV',
    img: null,
    name: 'Samsung TV 116\'',
    quantity: 2
  },
  {
    id: 4,
    category: 'TV',
    img: null,
    name: 'Philips TV Big screen Smart TV and all the stuff',
    quantity: 113630
  },
  {
    id: 5,
    category: 'TV',
    img: null,
    name: 'Philips TV Big screen Smart TV and all the stuff',
    quantity: 113630
  },
  {
    id: 6,
    category: 'TV',
    img: null,
    name: 'Philips TV Big screen Smart TV and all the stuff',
    quantity: 113630
  },
  {
    id: 7,
    category: 'TV',
    img: null,
    name: 'Philips TV Big screen Smart TV and all the stuff',
    quantity: 113630
  },
  {
    id: 8,
    category: 'TV',
    img: null,
    name: 'Philips TV Big screen Smart TV and all the stuff',
    quantity: 113630
  }
];

const products = (state = initialState, action) => {
  switch (action.type) {
    case Products.ADD_PRODUCT:
      break;
    default:
      return state;
  }
};

export default products;
