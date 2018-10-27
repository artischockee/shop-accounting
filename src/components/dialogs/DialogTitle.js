import React from 'react';
import PropTypes from 'prop-types';
import SVGClose from '../../svg-components/Close';

const DialogTitle = ({
  handleDialogClose,
  text
}) => (
  <div className="dialog__title">
    <p className="title__text">{text}</p>
    <button
      type="button"
      className="title__button"
      onClick={handleDialogClose}
    >
      <SVGClose className="button__svg" />
    </button>
  </div>
);

DialogTitle.propTypes = {
  handleDialogClose: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default DialogTitle;
