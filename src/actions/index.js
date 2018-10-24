export const Products = {
  ADD_PRODUCT: 'ADD_PRODUCT'
};

export const addProduct = (product) => ({
  type: Products.ADD_PRODUCT,
  product
});
