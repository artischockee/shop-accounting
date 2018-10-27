import React from 'react';
import { connect } from 'react-redux';
import EditProdDialog from '../components/EditProdDialog';
import { closeCurrentDialog, editProduct } from '../actions';

const getProductById = (products, id) => (
  products.find((product) => product.id === id)
);

const EditProdDialogContainer = ({
  initialValues,
  handleSubmit,
  handleDialogClose
}) => (
  <EditProdDialog
    onSubmit={values => handleSubmit(values)}
    initialValues={initialValues}
    handleDialogClose={handleDialogClose}
  />
);

const mapStateToProps = (state) => ({
  initialValues: getProductById(state.products, state.dialogs.showEditProd.id)
});

const mapDispatchToProps = (dispatch) => ({
  handleDialogClose: () => dispatch(closeCurrentDialog()),
  handleSubmit: (productData) => {
    dispatch(editProduct(productData));
    dispatch(closeCurrentDialog());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProdDialogContainer);
