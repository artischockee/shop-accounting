import { connect } from 'react-redux';
import AppMenu from '../components/AppMenu';
import {
  getReadablePrice,
  getReadableQuantity
} from '../static-data/getReadableData';

const getClassName = (isVisible) => {
  let className = 'app-menu';

  return isVisible
    ? `${className} ${className}_visible`
    : className
};

const getTotalProductsQuantity = (products) => {
  let initValue = 0;

  return getReadableQuantity(
    products.reduce(
      (acc, curVal) => (acc + curVal.quantity),
      initValue
    )
  );
};

const getTotalProductsValue = (products) => getReadablePrice(
  (products.map((product) => (
    product.quantity * product.price
  ))).reduce((acc, curVal) => acc + curVal)
);

const mapStateToProps = (state, ownProps) => ({
  className: getClassName(state.displayAppMenu),
  totalProductsQuantity: getTotalProductsQuantity(state.products),
  totalTypesQuantity: getReadableQuantity(state.products.length),
  totalProductsValue: getTotalProductsValue(state.products)
});

export default connect(
  mapStateToProps
)(AppMenu);
