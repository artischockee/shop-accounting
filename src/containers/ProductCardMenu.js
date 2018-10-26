import { connect } from 'react-redux';
import { deleteProduct } from '../actions';
import ProductCardMenu from '../components/ProductCardMenu';

const getClassName = (isVisible) => {
  let className = 'product-card__menu';

  return isVisible
    ? `${className} ${className}_visible`
    : className
};

const mapStateToProps = (state, ownProps) => ({
  className: getClassName(ownProps.visible)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteProduct: () => dispatch(deleteProduct(ownProps.id)),
  showEditProdDialog: () => {}
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductCardMenu);
