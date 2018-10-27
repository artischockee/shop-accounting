import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import DialogTitle from '../../containers/dialogs/DialogTitle';
import DialogControls from '../../containers/dialogs/DialogControls';
import FullscreenWrapper from '../FullscreenWrapper';
import InputField from '../forms/InputField';
import SelectField from '../forms/SelectField';
import { ProductCategories } from '../../static-data/productCategories';
import { validate } from '../../static-data/validate';

const EditProdDialog = ({ handleSubmit }) => (
  <FullscreenWrapper>
    <form className="dialog" onSubmit={handleSubmit}>

      <DialogTitle text="Edit product" />

      <div className="dialog__body">

        <Field name="name" id="name" type="text"
          component={InputField} label="Product name"
        />

        <Field name="category" id="category"
          payload={ProductCategories}
          component={SelectField} label="Category"
        />

        <Field name="price" id="price" type="text"
          placeholder="0"
          component={InputField} label="Price" shouldFitWidth
        />

        <Field name="quantity" id="quantity" type="text"
          placeholder="0"
          component={InputField} label="In stock" shouldFitWidth
        />

      </div>

      <DialogControls
        buttonCloseLabel="Cancel"
        buttonSubmitLabel="Confirm edit"
      />

    </form>
  </FullscreenWrapper>
);

EditProdDialog.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({
    id: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired
};

export default reduxForm({
  form: 'editProduct',
  validate
})(EditProdDialog);
