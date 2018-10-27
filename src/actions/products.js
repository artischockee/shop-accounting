export const Products = {
  ADD_PRODUCT: 'ADD_PRODUCT',
  DELETE_PRODUCT: 'DELETE_PRODUCT',
  EDIT_PRODUCT: 'EDIT_PRODUCT'
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

export const editProduct = (product) => ({
  type: Products.EDIT_PRODUCT,
  product
});
