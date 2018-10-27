import React from 'react';
import PropTypes from 'prop-types';

const AppMenu = ({
  className,
  totalProductsQuantity,
  totalTypesQuantity,
  totalProductsValue
}) => (
  <section className={className}>
    <p className="app-menu__paragraph">
      Total quantity of products in stock:
      <span className="app-menu__span">
        {totalProductsQuantity}
      </span>
    </p>

    <p className="app-menu__paragraph">
      Types of products in stock:
      <span className="app-menu__span">
        {totalTypesQuantity}
      </span>
    </p>

    <p className="app-menu__paragraph">
      Total products value in stock:
      <span className="app-menu__span">
        {totalProductsValue}
      </span>
    </p>
  </section>
);

AppMenu.propTypes = {
  className: PropTypes.string.isRequired,
  totalProductsQuantity: PropTypes.string.isRequired,
  totalTypesQuantity: PropTypes.string.isRequired,
  totalProductsValue: PropTypes.string.isRequired,
};

export default AppMenu;
