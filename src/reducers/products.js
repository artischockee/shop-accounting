import { Products } from '../actions';

const initialState = [
  {
    id: 0,
    category: 'TV',
    img: null,
    name: 'Philips TV Big screen Smart TV and all the stuff',
    quantity: 113630
  },
  {
    id: 1,
    category: 'House',
    img: null,
    name: 'Vacuum cleaner',
    quantity: 92
  },
  {
    id: 2,
    category: 'TV',
    img: null,
    name: 'Samsung TV 116\'',
    quantity: 2
  },
  {
    id: 3,
    category: 'TV',
    img: null,
    name: 'Philips TV Big screen Smart TV and all the stuff',
    quantity: 113630
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
  }
];

const products = (state = initialState, action) => {
  switch (action.type) {
    case Products.ADD_PRODUCT:
      return [
        ...state,
        {
          id: action.id,
          category: 'Other',
          img: null,
          name: action.name,
          quantity: action.quantity
        }
      ];
    default:
      return state;
  }
};

export default products;
