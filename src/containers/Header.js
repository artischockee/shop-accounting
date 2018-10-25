import { connect } from 'react-redux';
import { searchValueChange } from '../actions';
import Header from '../components/Header';

const mapStateToProps = (state, ownProps) => ({
  searchValue: state.searchValue
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onInputChange: (e) => dispatch(searchValueChange(e.target.value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
