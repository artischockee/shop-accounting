import React from 'react';
import { connect } from 'react-redux';
import DeleteProdDialog from '../components/DeleteProdDialog';
import { closeCurrentDialog, deleteProduct } from '../actions';

const getProductById = (products, id) => (
  products.find((product) => product.id === id)
);

const DeleteProdDialogContainer = ({
  initialValues,
  handleSubmit,
  handleDialogClose
}) => (
  <DeleteProdDialog
    onSubmit={values => handleSubmit(values)}
    initialValues={initialValues}
    handleDialogClose={handleDialogClose}
  />
);

const mapStateToProps = (state, ownProps) => ({
  initialValues: getProductById(state.products, state.dialogs.showDeleteProd.id)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleDialogClose: () => dispatch(closeCurrentDialog()),
  handleSubmit: (productData) => {
    dispatch(deleteProduct(productData.id));
    dispatch(closeCurrentDialog());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteProdDialogContainer);
