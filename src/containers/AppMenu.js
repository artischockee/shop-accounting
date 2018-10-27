import { connect } from 'react-redux';
import AppMenu from '../components/AppMenu';

const getClassName = (isVisible) => {
  let className = 'app-menu';

  return isVisible
    ? `${className} ${className}_visible`
    : className
};

const getTotalProductsQuantity = (products) => {
  let initValue = 0;

  return products.reduce(
    (accumulator, currentValue) => (accumulator + currentValue.quantity),
    initValue
  );
};

const getTotalTypesQuantity = (products) => products.length;

const getTotalProductsValue = (products) => {
  return (products.map((prod) => {
    return prod.quantity * prod.price;
  })).reduce((acc, curVal) => acc + curVal);
};

const mapStateToProps = (state, ownProps) => ({
  className: getClassName(state.displayAppMenu),
  totalProductsQuantity: getTotalProductsQuantity(state.products),
  totalTypesQuantity: getTotalTypesQuantity(state.products),
  totalProductsValue: getTotalProductsValue(state.products)
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppMenu);
