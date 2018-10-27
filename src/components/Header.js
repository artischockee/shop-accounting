import React from 'react';
import PropTypes from 'prop-types';
import SVGPlus from '../svg-components/Plus';

const Header = ({
  handleMenuButtonClick,
  onButtonClick,
  onInputChange,
  searchValue
}) => (
  <header className="header">

    <section className="header__title">
      <div className="logo">
        <p className="logo__inscription">Logo</p>
      </div>
      <p className="header__page-name">Accounting</p>
    </section>

    <section className="header__control">
      <button className="button" onClick={handleMenuButtonClick}>
        Menu
      </button>
      <div className="search">
        <input className="search__input" type="text" placeholder="Search"
          onChange={onInputChange} value={searchValue}
        />
      </div>
      <button className="button button_layout_flex" onClick={onButtonClick}>
        <SVGPlus className="button__svg" />
        Add product
      </button>
    </section>
  </header>
);

Header.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired
};

export default Header;
