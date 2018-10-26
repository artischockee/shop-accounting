import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = (state, ownProps) => ({
  showAddProdDialog: state.dialogs.showAddProd,
  showEditProdDialog: state.dialogs.showEditProd.show
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
