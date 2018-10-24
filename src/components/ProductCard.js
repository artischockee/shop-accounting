import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = ({
  category,
  name,
  quantity
}) => (
  <div className="product-card">
    <p className="product-card__category">{category}</p>
    <div className="product-card__image-placeholder"><span>img</span></div>
    <p className="product-card__product-name">{name}</p>
    <p className="product-card__warehouse-info">
      On warehouse:
      <span className="product-card__items-left">
        {quantity}
      </span>
    </p>
  </div>
);

ProductCard.propTypes = {
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired
};

export default ProductCard;
