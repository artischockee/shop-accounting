import React from 'react';
import PropTypes from 'prop-types';

const AppMenu = ({
  className,
  totalAmount
}) => (
  <section className={className}>
    <p>Total amount of products on warehouse: <span>{totalAmount.toLocaleString()}</span></p>
  </section>
);

AppMenu.propTypes = {
  className: PropTypes.string.isRequired
};

export default AppMenu;
