import React from 'react';
import PropTypes from 'prop-types';
import ProductCardMenu from '../containers/ProductCardMenu';
import { currencyFormatter } from '../static-data/currencyFormatter';

const getReadableQuantity = (quantity) => quantity.toLocaleString();
const getReadablePrice = (price) => currencyFormatter.format(price);

const ProductCard = ({
  category,
  name,
  quantity,
  img,
  id,
  price,
  isSettingsMenuVisible,
  hideProductCardMenu,
  showProductCardMenu
}) => (
  <div className="product-card"
    onMouseEnter={showProductCardMenu}
    onMouseLeave={hideProductCardMenu}
  >

    <div className="product-card__top-section">
      <p className="product-card__category">{category}</p>
    </div>

    <div className="product-card__image-container">
      <ProductCardMenu visible={isSettingsMenuVisible} id={id} />
      {/* <img className="product-card__image" src={img} alt={name} /> */}
    </div>

    <p className="product-card__product-name">{name}</p>

    <div className="product-card__bottom-section">

      <p className="info-block">
        Price:
        <span className="info-block__data">
          {getReadablePrice(price)}
        </span>
      </p>

      <p className="info-block">
        In stock:
        <span className="info-block__data">
          {getReadableQuantity(quantity)}
        </span>
      </p>

    </div>

  </div>
);

ProductCard.propTypes = {
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  img: PropTypes.string,
  id: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  hideProductCardMenu: PropTypes.func.isRequired,
  showProductCardMenu: PropTypes.func.isRequired,
  isSettingsMenuVisible: PropTypes.bool.isRequired
};

export default ProductCard;
