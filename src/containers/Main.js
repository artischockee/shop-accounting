import { connect } from 'react-redux';
import Main from '../components/Main';

const getProductsBySearchValue = (products, searchValue) => {
  if (searchValue === '')
    return products;

  searchValue = searchValue.toLowerCase();

  return products.filter((product) => {
    let name = product.name.toLowerCase();

    return name.includes(searchValue);
  });
};

const mapStateToProps = (state, ownProps) => ({
  products: getProductsBySearchValue(state.products, state.searchValue)
});

export default connect(mapStateToProps)(Main);
