import React from 'react';
import PropTypes from 'prop-types';

const SVGPlus = ({ className }) => (
  <svg className={className} viewBox="0 0 357 357" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M357,204H204v153h-51V204H0v-51h153V0h51v153h153V204z"/>
  </svg>
);

SVGPlus.propTypes = {
  className: PropTypes.string.isRequired
};

export default SVGPlus;
