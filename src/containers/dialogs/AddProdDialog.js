import React from 'react';
import { connect } from 'react-redux';
import AddProdDialog from '../../components/dialogs/AddProdDialog';
import { closeCurrentDialog, addProduct } from '../../actions';

const AddProdDialogContainer = ({ handleSubmit }) => (
  <AddProdDialog
    onSubmit={productData => {
      handleSubmit(Object.assign({}, productData, {
        quantity: Number(productData.quantity),
        price: Number(productData.price)
      }));
    }}
  />
);

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (productData) => {
    dispatch(addProduct(productData));
    dispatch(closeCurrentDialog());
  }
});

export default connect(
  null,
  mapDispatchToProps
)(AddProdDialogContainer);
