import React from 'react';
import PropTypes from 'prop-types';

const DialogControls = ({
  handleDialogClose,
  buttonCloseLabel,
  buttonSubmitLabel
}) => (
  <div className="dialog__controls">

    <button
      type="button"
      className="controls__button"
      onClick={handleDialogClose}
    >
      {buttonCloseLabel}
    </button>

    <button
      type="submit"
      className="controls__button controls__button_primary"
    >
      {buttonSubmitLabel}
    </button>

  </div>
);

DialogControls.propTypes = {
  handleDialogClose: PropTypes.func.isRequired,
  buttonCloseLabel: PropTypes.string.isRequired,
  buttonSubmitLabel: PropTypes.string.isRequired
};

export default DialogControls;
