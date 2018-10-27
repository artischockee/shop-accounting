import React from 'react';
import PropTypes from 'prop-types';
import SVGCogwheel from '../svg-components/Cogwheel';
import ProductCardMenu from '../containers/ProductCardMenu';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
});

const getReadableQuantity = (quantity) => quantity.toLocaleString();
const getReadablePrice = (price) => formatter.format(price);

const ProductCard = ({
  category,
  name,
  quantity,
  img,
  id,
  price,
  switchSettingsMenu,
  isSettingsMenuVisible
}) => (
  <div className="product-card">

    <div className="product-card__top-section">
      <p className="product-card__category">{category}</p>
      <button className="button button_type_svg" onClick={switchSettingsMenu}>
        <SVGCogwheel className="button__svg" />
      </button>
    </div>

    <ProductCardMenu visible={isSettingsMenuVisible} id={id} />

    <div className="product-card__image-container">
      {/* <img className="product-card__image" src={img} alt={name} /> */}
    </div>

    <p className="product-card__product-name">{name}</p>

    <div className="product-card__bottom-info-wrapper">

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
  switchSettingsMenu: PropTypes.func.isRequired,
  isSettingsMenuVisible: PropTypes.bool.isRequired
};

export default ProductCard;
