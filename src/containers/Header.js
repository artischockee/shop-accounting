import { connect } from 'react-redux';
import { openAddProdDialog, searchValueChange } from '../actions';
import Header from '../components/Header';

const mapStateToProps = (state, ownProps) => ({
  searchValue: state.searchValue
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onButtonClick: () => dispatch(openAddProdDialog()),
  onInputChange: (e) => dispatch(searchValueChange(e.target.value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
