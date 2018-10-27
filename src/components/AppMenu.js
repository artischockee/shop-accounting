import React from 'react';
import PropTypes from 'prop-types';

const getReadableNumber = (number) => (
  typeof number === 'string'
    ? Number(number).toLocaleString()
    : number.toLocaleString()
);

const AppMenu = ({
  className,
  totalProductsQuantity,
  totalTypesQuantity,
  totalProductsValue
}) => (
  <section className={className}>
    <p>
      Total quantity of products in stock:
      <span>
        {getReadableNumber(totalProductsQuantity)}
      </span>
    </p>

    <p>
      Types of products in stock:
      <span>
        {getReadableNumber(totalTypesQuantity)}
      </span>
    </p>

    <p>
      Total products value in stock:
      <span>
        {getReadableNumber(totalProductsValue)}
      </span>
    </p>
  </section>
);

AppMenu.propTypes = {
  className: PropTypes.string.isRequired,
  totalProductsQuantity: PropTypes.number.isRequired,
  totalTypesQuantity: PropTypes.number.isRequired,
  totalProductsValue: PropTypes.number.isRequired,
};

export default AppMenu;
