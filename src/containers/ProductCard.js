import { connect } from 'react-redux';
import { showProdSettingsMenu, hideProdSettingsMenu } from '../actions';
import ProductCard from '../components/ProductCard';

const mapStateToProps = (state, ownProps) => ({
  isSettingsMenuVisible: state.displayMenuForId === ownProps.id
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  hideProductCardMenu: () => dispatch(hideProdSettingsMenu()),
  showProductCardMenu: () => dispatch(showProdSettingsMenu(ownProps.id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductCard);
