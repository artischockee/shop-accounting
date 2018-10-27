import { connect } from 'react-redux';
import DialogTitle from '../../components/dialogs/DialogTitle';
import { closeCurrentDialog } from '../../actions';

const mapDispatchToProps = (dispatch) => ({
  handleDialogClose: () => dispatch(closeCurrentDialog())
});

export default connect(
  null,
  mapDispatchToProps
)(DialogTitle);
