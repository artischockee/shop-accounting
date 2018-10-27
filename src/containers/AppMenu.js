import { connect } from 'react-redux';
import AppMenu from '../components/AppMenu';
import { currencyFormatter } from '../static-data/currencyFormatter';

const getClassName = (isVisible) => {
  let className = 'app-menu';

  return isVisible
    ? `${className} ${className}_visible`
    : className
};

const getTotalProductsQuantity = (products) => {
  let initValue = 0;

  return products.reduce(
    (acc, curVal) => (acc + curVal.quantity),
    initValue
  ).toLocaleString();
};

const getTotalTypesQuantity = (products) => products.length.toLocaleString();

const getTotalProductsValue = (products) => (
  currencyFormatter.format(
    (products.map((product) => (
      product.quantity * product.price
    ))).reduce((acc, curVal) => acc + curVal)
  )
);

const mapStateToProps = (state, ownProps) => ({
  className: getClassName(state.displayAppMenu),
  totalProductsQuantity: getTotalProductsQuantity(state.products),
  totalTypesQuantity: getTotalTypesQuantity(state.products),
  totalProductsValue: getTotalProductsValue(state.products)
});

export default connect(
  mapStateToProps
)(AppMenu);
