import React from 'react';
import { connect } from 'react-redux';
import DeleteProdDialog from '../../components/dialogs/DeleteProdDialog';
import { closeCurrentDialog, deleteProduct } from '../../actions';

const getProductById = (products, id) => (
  products.find((product) => product.id === id)
);

const DeleteProdDialogContainer = ({
  initialValues,
  handleSubmit
}) => (
  <DeleteProdDialog
    onSubmit={productData => handleSubmit(productData.id)}
    initialValues={initialValues}
  />
);

const mapStateToProps = (state) => ({
  initialValues: getProductById(state.products, state.dialogs.showDeleteProd.id)
});

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (productId) => {
    dispatch(deleteProduct(productId));
    dispatch(closeCurrentDialog());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteProdDialogContainer);
