import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../containers/ProductCard';

const Main = ({ products }) => (
  <main className="main">
    {products.map((product) => (
      <ProductCard
        key={product.id}
        category={product.category}
        name={product.name}
        quantity={product.quantity}
      />
    ))}
  </main>
);

Main.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired
    }).isRequired
  )
};

export default Main;
