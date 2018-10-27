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
    onSubmit={values => handleSubmit(values)}
    initialValues={initialValues}
  />
);

const mapStateToProps = (state) => ({
  initialValues: getProductById(state.products, state.dialogs.showDeleteProd.id)
});

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (productData) => {
    dispatch(deleteProduct(productData.id));
    dispatch(closeCurrentDialog());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteProdDialogContainer);
