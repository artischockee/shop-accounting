import { connect } from 'react-redux';
import AppMenu from '../components/AppMenu';

const getClassName = (isVisible) => {
  let className = 'app-menu';

  return isVisible
    ? `${className} ${className}_visible`
    : className
};

const getTotalAmount = (products) => {
  let initValue = 0;

  return products.reduce(
    (accumulator, currentValue) => (accumulator + currentValue.quantity),
    initValue
  );
};

const mapStateToProps = (state, ownProps) => ({
  className: getClassName(state.appMenu),
  totalAmount: getTotalAmount(state.products)
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppMenu);
