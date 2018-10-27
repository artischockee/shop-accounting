import { connect } from 'react-redux';
import { switchSettingsMenu } from '../actions';
import ProductCard from '../components/ProductCard';

const getResult = (products, ownId) => (
  products.find((prod) => prod.id === ownId).displaySettingsMenu
);

const mapStateToProps = (state, ownProps) => ({
  isSettingsMenuVisible: getResult(state.products, ownProps.id)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  switchSettingsMenu: () => dispatch(switchSettingsMenu(ownProps.id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductCard);
