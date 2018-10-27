import { Products, SWITCH_PRODUCT_SETTINGS_MENU } from '../actions';

const initialState = [
  {
    id: 0,
    category: 'TV',
    img: null,
    name: 'Philips TV Big screen Smart TV and all the stuff',
    quantity: 113630,
    displaySettingsMenu: false
  },
  {
    id: 1,
    category: 'House',
    img: null,
    name: 'Vacuum cleaner HV7000 2200W',
    quantity: 92,
    displaySettingsMenu: false
  },
  {
    id: 2,
    category: 'TV',
    img: null,
    name: 'Samsung TV HX-1345 116\'',
    quantity: 2,
    displaySettingsMenu: false
  },
  {
    id: 3,
    category: 'Fun',
    img: null,
    name: 'Pink spinner',
    quantity: 234952,
    displaySettingsMenu: false
  },
  {
    id: 4,
    category: 'Other',
    img: null,
    name: 'Water flask',
    quantity: 544,
    displaySettingsMenu: false
  },
  {
    id: 5,
    category: 'Internet',
    img: null,
    name: 'PT-Link Wi-Fi Router',
    quantity: 116,
    displaySettingsMenu: false
  },
  {
    id: 6,
    category: 'Office',
    img: null,
    name: 'Parker Pen',
    quantity: 978,
    displaySettingsMenu: false
  },
  {
    id: 7,
    category: 'TV',
    img: null,
    name: 'Philips TV small screen Dumb TV and nothing more',
    quantity: 5133,
    displaySettingsMenu: false
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
          quantity: action.quantity,
          displaySettingsMenu: false
        }
      ];
    case Products.DELETE_PRODUCT:
      return state.filter((product) => product.id !== action.id);
    case Products.EDIT_PRODUCT:
      return state.map((product) =>
        product.id === action.product.id
          ? {
              ...action.product,
              quantity: Number(action.product.quantity),
              displaySettingsMenu: !action.product.displaySettingsMenu
            }
          : product
      );
    case SWITCH_PRODUCT_SETTINGS_MENU:
      return state.map((product) =>
        product.id === action.id
          ? { ...product, displaySettingsMenu: !product.displaySettingsMenu }
          : product
      );
    default:
      return state;
  }
};

export default products;
