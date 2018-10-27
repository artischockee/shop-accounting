import React from 'react';
import { connect } from 'react-redux';
import EditProdDialog from '../../components/dialogs/EditProdDialog';
import { closeCurrentDialog, editProduct } from '../../actions';
import { getProductById } from '../../static-data/getProductById';

const EditProdDialogContainer = ({
  initialValues,
  handleSubmit
}) => (
  <EditProdDialog
    onSubmit={productData => handleSubmit(Object.assign({}, productData, {
      quantity: Number(productData.quantity),
      price: Number(productData.price)
    }))}
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
