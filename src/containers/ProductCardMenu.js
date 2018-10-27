import { connect } from 'react-redux';
import { openEditProdDialog, openDeleteProdDialog } from '../actions';
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
  showEditProdDialog: () => dispatch(openEditProdDialog(ownProps.id)),
  showDeleteProdDialog: () => dispatch(openDeleteProdDialog(ownProps.id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductCardMenu);
