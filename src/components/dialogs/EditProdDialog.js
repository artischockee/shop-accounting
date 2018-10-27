import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import DialogTitle from '../../containers/dialogs/DialogTitle';
import DialogControls from '../../containers/dialogs/DialogControls';

// TODO: Add a form validation and show warnings on wrong symbols typed

const EditProdDialog = ({
  handleSubmit,
  initialValues
}) => (
  <div className="fullscreen-wrapper">
    <form className="dialog" onSubmit={handleSubmit}>

      <DialogTitle text="Edit product" />

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

      <DialogControls
        buttonCloseLabel="Cancel"
        buttonSubmitLabel="Confirm edit"
      />

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
  }).isRequired
};

export default reduxForm({
  form: 'editProduct'
})(EditProdDialog);
