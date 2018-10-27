import React from 'react';
import { connect } from 'react-redux';
import EditProdDialog from '../../components/dialogs/EditProdDialog';
import { closeCurrentDialog, editProduct } from '../../actions';

const getProductById = (products, id) => (
  products.find((product) => product.id === id)
);

const EditProdDialogContainer = ({
  initialValues,
  handleSubmit
}) => (
  <EditProdDialog
    onSubmit={values => handleSubmit(values)}
    initialValues={initialValues}
  />
);

const mapStateToProps = (state) => ({
  initialValues: getProductById(state.products, state.dialogs.showEditProd.id)
});

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (productData) => {
    dispatch(editProduct(productData));
    dispatch(closeCurrentDialog());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProdDialogContainer);
