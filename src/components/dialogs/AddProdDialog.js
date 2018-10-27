import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import DialogTitle from '../../containers/dialogs/DialogTitle';
import DialogControls from '../../containers/dialogs/DialogControls';

/*const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Required'
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.age) {
    errors.age = 'Required'
  } else if (isNaN(Number(values.age))) {
    errors.age = 'Must be a number'
  } else if (Number(values.age) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old'
  }
  return errors
};

const warn = values => {
  const warnings = {}
  if (values.age < 19) {
    warnings.age = 'Hmm, you seem a bit young...'
  }
  return warnings
};*/

// TODO: Add a form validation and show warnings on wrong symbols typed

const AddProdDialog = ({ handleSubmit }) => (
  <div className="fullscreen-wrapper">
    <form className="dialog" onSubmit={handleSubmit}>

      <DialogTitle text="Add product" />

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

      <DialogControls
        buttonCloseLabel="Cancel"
        buttonSubmitLabel="Add"
      />

    </form>
  </div>
);

AddProdDialog.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'addProduct'
})(AddProdDialog);
