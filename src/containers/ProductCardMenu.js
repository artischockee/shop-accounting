import { connect } from 'react-redux';
import { deleteProduct } from '../actions';
import ProductCardMenu from '../components/ProductCardMenu';

const getClassName = (isVisible) => (
  isVisible
    ? 'product-card__menu product-card__menu_visible'
    : 'product-card__menu'
);

const mapStateToProps = (state, ownProps) => ({
  className: getClassName(ownProps.visible)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteProduct: () => dispatch(deleteProduct(ownProps.id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductCardMenu);
