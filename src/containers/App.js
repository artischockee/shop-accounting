import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = (state, ownProps) => ({
  showAddProdDialog: state.dialogs.showAddProd,
  showDeleteProdDialog: state.dialogs.showDeleteProd.show,
  showEditProdDialog: state.dialogs.showEditProd.show
});

export default connect(mapStateToProps)(App);
