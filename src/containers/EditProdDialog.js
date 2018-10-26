import { connect } from 'react-redux';
import EditProdDialog from '../components/EditProdDialog';
import { closeEditProdDialog } from '../actions';

const getProductById = (products, id) => {
  return products.find((product) => product.id === id);
};

const mapStateToProps = (state, ownProps) => ({
  id: state.dialogs.showEditProd.id,
  product: getProductById(state.products, state.dialogs.showEditProd.id)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  dialogClose: () => dispatch(closeEditProdDialog()),
  dispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProdDialog);
