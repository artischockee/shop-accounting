import React from 'react';
import { connect } from 'react-redux';
import AddProdDialog from '../components/AddProdDialog';
import { closeCurrentDialog, addProduct } from '../actions';

const AddProdDialogContainer = ({
  handleSubmit,
  handleDialogClose
}) => (
  <AddProdDialog
    onSubmit={values => handleSubmit(values)}
    handleDialogClose={handleDialogClose}
  />
);

const mapDispatchToProps = (dispatch) => ({
  handleDialogClose: () => dispatch(closeCurrentDialog()),
  handleSubmit: (productData) => {
    dispatch(addProduct(productData));
    dispatch(closeCurrentDialog());
  }
});

export default connect(
  null,
  mapDispatchToProps
)(AddProdDialogContainer);
