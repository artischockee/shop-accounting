import { connect } from 'react-redux';
import DialogControls from '../../components/dialogs/DialogControls';
import { closeCurrentDialog } from '../../actions';

const mapDispatchToProps = (dispatch) => ({
  handleDialogClose: () => dispatch(closeCurrentDialog())
});

export default connect(
  null,
  mapDispatchToProps
)(DialogControls);
