import { connect } from 'react-redux';
import { switchSettingsMenu } from '../actions';
import ProductCard from '../components/ProductCard';

const getResult = (products, ownId) => (
  products.find((prod) => prod.id === ownId).displaySettingsMenu
    ? true
    : false
);

const mapStateToProps = (state, ownProps) => ({
  displaySettingsMenu: getResult(state.products, ownProps.id),
  id: ownProps.id
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  switchSettingsMenu: () => dispatch(switchSettingsMenu(ownProps.id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductCard);
