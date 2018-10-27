import React from 'react';
import PropTypes from 'prop-types';

const FullscreenWrapper = ({ children }) => (
  <div className="fullscreen-wrapper">
    {children}
  </div>
);

FullscreenWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default FullscreenWrapper;
