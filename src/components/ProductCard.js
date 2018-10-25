import React from 'react';
import PropTypes from 'prop-types';
import SVGCogwheel from '../svg-components/Cogwheel';
import ProductCardMenu from '../containers/ProductCardMenu';

const getReadableQuantity = (quantity) => quantity.toLocaleString();

const ProductCard = ({
  category,
  name,
  quantity,
  img,
  id,
  switchSettingsMenu,
  displaySettingsMenu
}) => (
  <div className="product-card">

    <div className="product-card__top-section">
      <p className="product-card__category">{category}</p>
      <button className="button button_type_svg" onClick={switchSettingsMenu}>
        <SVGCogwheel className="button__svg" />
      </button>
    </div>

    <ProductCardMenu visible={displaySettingsMenu} id={id} />

    <div className="product-card__image-container">
      {/* <img className="product-card__image" src={img} alt={name} /> */}
    </div>

    <p className="product-card__product-name">{name}</p>

    <p className="product-card__warehouse-info">
      On warehouse:
      <span className="product-card__items-left">
        {getReadableQuantity(quantity)}
      </span>
    </p>

  </div>
);

ProductCard.propTypes = {
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  img: PropTypes.string,
  id: PropTypes.number.isRequired,
  switchSettingsMenu: PropTypes.func.isRequired,
  displaySettingsMenu: PropTypes.bool.isRequired
};

export default ProductCard;
