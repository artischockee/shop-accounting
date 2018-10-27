import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import SVGClose from '../svg-components/Close';

const DeleteProdDialog = ({
  handleDialogClose,
  handleSubmit,
  initialValues
}) => (
  <div className="fullscreen-wrapper">
    <form className="dialog" onSubmit={handleSubmit}>

      <div className="dialog__title">
        <p className="title__text">Delete product</p>
        <button type="button" className="title__button" onClick={handleDialogClose}>
          <SVGClose className="button__svg" />
        </button>
      </div>

      <div className="dialog__body">
        <p className="body__text">
          Are you sure you want to delete
          <span className="body__span_bold">
            '{initialValues.name}'
          </span>
          from the list?
        </p>
        <p className="body__text">
          This cannot be undone.
        </p>
      </div>

      <div className="dialog__controls">
        <button
          type="button"
          className="controls__button"
          onClick={handleDialogClose}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="controls__button controls__button_primary"
        >
          Delete
        </button>
      </div>

    </form>
  </div>
);

DeleteProdDialog.propTypes = {
  handleDialogClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'deleteProduct'
})(DeleteProdDialog);
