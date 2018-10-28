import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import DialogTitle from '../../containers/dialogs/DialogTitle';
import DialogControls from '../../containers/dialogs/DialogControls';
import FullscreenWrapper from '../FullscreenWrapper';
import {
  getReadableQuantity,
  getReadablePrice
} from '../../static-data/getReadableData';

const DeleteProdDialog = ({
  handleSubmit,
  initialValues
}) => (
  <FullscreenWrapper>
    <form className="dialog" onSubmit={handleSubmit}>

      <DialogTitle text="Delete product" />

      <div className="dialog__body">
        <p className="body__text">
          Are you sure you want to delete this item from the list?
        </p>
        <ul className="body__list">
          <li className="body__list-item">
            Name:
            <span className="body__list-span">
              {initialValues.name}
            </span>
          </li>
          <li className="body__list-item">
            Category:
            <span className="body__list-span">
              {initialValues.category}
            </span>
          </li>
          <li className="body__list-item">
            Price:
            <span className="body__list-span">
              {getReadablePrice(initialValues.price)}
            </span>
          </li>
          <li className="body__list-item">
            In stock:
            <span className="body__list-span">
              {getReadableQuantity(initialValues.quantity)}
            </span>
          </li>
        </ul>
        <p className="body__text">
          This cannot be undone.
        </p>
      </div>

      <DialogControls
        buttonCloseLabel="Cancel"
        buttonSubmitLabel="Delete"
      />

    </form>
  </FullscreenWrapper>
);

DeleteProdDialog.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  }).isRequired
};

export default reduxForm({
  form: 'deleteProduct'
})(DeleteProdDialog);
