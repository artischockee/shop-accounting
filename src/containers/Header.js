import { connect } from 'react-redux';
import {
  openAddProdDialog,
  searchValueChange,
  switchAppMenu
} from '../actions';
import Header from '../components/Header';

const mapStateToProps = (state) => ({
  searchValue: state.searchValue
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleMenuButtonClick: () => dispatch(switchAppMenu()),
  handleAddProductClick: () => dispatch(openAddProdDialog()),
  handleSearchValueChange: (e) => dispatch(searchValueChange(e.target.value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
