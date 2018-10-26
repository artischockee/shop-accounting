import React from 'react';
import PropTypes from 'prop-types';
import { addProduct } from '../actions';
import SVGClose from '../svg-components/Close';

// TODO: Add a form validation and show warnings on wrong symbols typed

const EditProdDialog = ({
  dialogClose,
  dispatch,
  id,
  product
}) => {
  return (
    <div className="fullscreen-wrapper">
      <form className="add-prod-dialog"
        onSubmit={(e) => {
          e.preventDefault();

          // if (
          //   !productName.value.trim() ||
          //   isNaN(productQuantity.value)
          // ) {
          //   return;
          // }
          //
          // dispatch(addProduct(productName.value, Number(productQuantity.value)));
          //
          // productName.value = '';
          // productQuantity.value = '';
          //
          // dialogClose();
        }}
      >
        <div className="add-prod-dialog__title">
          <p className="title__text">Edit product for id {id}</p>
          <button type="button" className="title__button" onClick={dialogClose}>
            <SVGClose className="button__svg" />
          </button>
        </div>

        <div className="add-prod-dialog__body">
          <div className="body__field">
            <label className="field__label" htmlFor="name">Product name</label>
            <input type="text" className="field__input" id="name"
              value={product.name}
              onChange={() => {}}
            />
          </div>
          <div className="body__field">
            <label className="field__label" htmlFor="quantity">Quantity</label>
            <input type="text" className="field__input field__input_type_number" id="quantity"
              value={product.quantity}
              onChange={() => {}}
            />
          </div>
        </div>

        <div className="add-prod-dialog__controls">
          <button type="button" className="controls__button" onClick={dialogClose}>Cancel</button>
          <button type="submit" className="controls__button controls__button_primary">Add</button>
        </div>
      </form>
    </div>
  );
};

EditProdDialog.propTypes = {
  dialogClose: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default EditProdDialog;
