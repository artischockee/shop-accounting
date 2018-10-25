export const Products = {
  ADD_PRODUCT: 'ADD_PRODUCT'
};

export const addProduct = (product) => ({
  type: Products.ADD_PRODUCT,
  product
});

export const SEARCH_VALUE_CHANGE = 'SEARCH_VALUE_CHANGE';

export const searchValueChange = (value) => ({
  type: SEARCH_VALUE_CHANGE,
  value
});
