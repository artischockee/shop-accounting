import { connect } from 'react-redux';
import Main from '../components/Main';

const mapStateToProps = (state, ownProps) => ({
  products: state.products
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
