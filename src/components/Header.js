import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => (
  <header className="header">

    <section className="header__title">
      <div className="logo">
        <p className="logo__inscription">Logo</p>
      </div>
      <p className="header__page-name">Accounting</p>
    </section>

    <section className="header__control">
      <div className="catalog">
        <p className="catalog__title">Catalog</p>
      </div>
      <div className="search">
        <input className="search__input" type="text" />
      </div>
      <button className="button">Add product</button>
    </section>

  </header>
);

Header.propTypes = {
  
};

export default Header;
