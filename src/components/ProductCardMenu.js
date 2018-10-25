import React from 'react';
import PropTypes from 'prop-types';

const ProductCardMenu = ({
  className,
  deleteProduct
}) => (
  <div className={className}>
    <button className="button button_hstyle_warning" onClick={deleteProduct}>Delete product</button>
  </div>
);

ProductCardMenu.propTypes = {
  className: PropTypes.string.isRequired,
  deleteProduct: PropTypes.func.isRequired
};

export default ProductCardMenu;
