import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import SVGClose from '../svg-components/Close';

// TODO: Add a form validation and show warnings on wrong symbols typed

const EditProdDialog = ({
  handleSubmit,
  initialValues,
  dialogClose
}) => (
  <div className="fullscreen-wrapper">
    <form className="dialog" onSubmit={handleSubmit}>

      <div className="dialog__title">
        <p className="title__text">Edit product</p>
        <button type="button" className="title__button" onClick={dialogClose}>
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
            value={initialValues.name}
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
            value={initialValues.quantity}
            placeholder="0"
          />
        </div>
      </div>

      <div className="dialog__controls">
        <button type="button" className="controls__button" onClick={dialogClose}>
          Cancel
        </button>
        <button type="submit" className="controls__button controls__button_primary">
          Confirm edit
        </button>
      </div>

    </form>
  </div>
);

EditProdDialog.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({
    id: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired
  }).isRequired,
  dialogClose: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'editProduct'
})(EditProdDialog);
