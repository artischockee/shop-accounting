import React from 'react';
import { connect } from 'react-redux';
import EditProdDialog from '../components/EditProdDialog';
import { closeEditProdDialog, editProduct } from '../actions';

const getProductById = (products, id) => (
  products.find((product) => product.id === id)
);

const EditProdDialogContainer = ({
  initialValues,
  handleSubmit,
  dialogClose,
  values
}) => (
  <EditProdDialog
    onSubmit={values => handleSubmit(values)}
    initialValues={initialValues}
    dialogClose={dialogClose}
  />
);

const mapStateToProps = (state, ownProps) => ({
  initialValues: getProductById(state.products, state.dialogs.showEditProd.id)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  dialogClose: () => dispatch(closeEditProdDialog()),
  handleSubmit: (productData) => {
    dispatch(editProduct(productData));
    dispatch(closeEditProdDialog());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProdDialogContainer);
