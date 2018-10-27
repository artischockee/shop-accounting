import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import SVGClose from '../svg-components/Close';

// TODO: Add a form validation and show warnings on wrong symbols typed

const AddProdDialog = ({
  handleDialogClose,
  handleSubmit
}) => (
  <div className="fullscreen-wrapper">
    <form className="dialog" onSubmit={handleSubmit}>
      <div className="dialog__title">
        <p className="title__text">Add product</p>
        <button type="button" className="title__button" onClick={handleDialogClose}>
          <SVGClose className="button__svg" />
        </button>
      </div>

      <div className="dialog__body">
        <div className="body__field">
          <label className="field__label" htmlFor="name">Product name</label>
          <Field
            className="field__input"
            component="input"
            type="text"
            id="name"
            name="name"
            placeholder="Product name"
          />
        </div>
        <div className="body__field">
          <label className="field__label" htmlFor="quantity">Quantity</label>
          <Field
            className="field__input field__input_type_number"
            component="input"
            type="text"
            id="quantity"
            name="quantity"
            placeholder="0"
          />
        </div>
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
          Add
        </button>

      </div>

    </form>
  </div>
);

AddProdDialog.propTypes = {
  handleDialogClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'addProduct'
})(AddProdDialog);
