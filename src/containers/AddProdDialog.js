import { connect } from 'react-redux';
import AddProdDialog from '../components/AddProdDialog';
import { closeAddProdDialog } from '../actions';

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
  dialogClose: () => dispatch(closeAddProdDialog()),
  dispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProdDialog);
