export const Products = {
  ADD_PRODUCT: 'ADD_PRODUCT',
  DELETE_PRODUCT: 'DELETE_PRODUCT'
};

let productId = 8; // value is 8 because of existing products (see 'reducers/products')
export const addProduct = (name, quantity) => ({
  type: Products.ADD_PRODUCT,
  id: productId++,
  name,
  quantity
});

export const deleteProduct = (id) => ({
  type: Products.DELETE_PRODUCT,
  id
});


export const AddProdDialog = {
  OPEN: 'OPEN',
  CLOSE: 'CLOSE'
};

export const openAddProdDialog = () => ({
  type: AddProdDialog.OPEN
});

export const closeAddProdDialog = () => ({
  type: AddProdDialog.CLOSE
});


export const SEARCH_VALUE_CHANGE = 'SEARCH_VALUE_CHANGE';

export const searchValueChange = (value) => ({
  type: SEARCH_VALUE_CHANGE,
  value
});


export const SWITCH_PRODUCT_SETTINGS_MENU = 'SWITCH_PRODUCT_SETTINGS_MENU';

export const switchSettingsMenu = (productId) => ({
  type: SWITCH_PRODUCT_SETTINGS_MENU,
  id: productId
});
