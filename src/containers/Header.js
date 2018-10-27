import { connect } from 'react-redux';
import {
  openAddProdDialog,
  searchValueChange,
  switchAppMenu
} from '../actions';
import Header from '../components/Header';

const mapStateToProps = (state, ownProps) => ({
  searchValue: state.searchValue
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleMenuButtonClick: () => dispatch(switchAppMenu()),
  onButtonClick: () => dispatch(openAddProdDialog()),
  onInputChange: (e) => dispatch(searchValueChange(e.target.value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
