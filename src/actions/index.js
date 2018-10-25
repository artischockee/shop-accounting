export const Products = {
  ADD_PRODUCT: 'ADD_PRODUCT'
};

let productId = 8; // value is 8 because of existing products (see 'reducers/products')
export const addProduct = (name, quantity) => ({
  type: Products.ADD_PRODUCT,
  id: productId++,
  name,
  quantity
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
