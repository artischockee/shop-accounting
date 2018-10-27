import React from 'react';
import PropTypes from 'prop-types';
import { addProduct } from '../actions';
import SVGClose from '../svg-components/Close';

// TODO: Add a form validation and show warnings on wrong symbols typed

const AddProdDialog = ({
  dialogClose,
  dispatch
}) => {
  let productName;
  let productQuantity;

  return (
    <div className="fullscreen-wrapper">
      <form className="dialog"
        onSubmit={(e) => {
          e.preventDefault();

          if (
            !productName.value.trim() ||
            isNaN(productQuantity.value)
          ) {
            return;
          }

          dispatch(addProduct(productName.value, Number(productQuantity.value)));

          productName.value = '';
          productQuantity.value = '';

          dialogClose();
        }}
      >
        <div className="dialog__title">
          <p className="title__text">Add product</p>
          <button type="button" className="title__button" onClick={dialogClose}>
            <SVGClose className="button__svg" />
          </button>
        </div>

        <div className="dialog__body">
          <div className="body__field">
            <label className="field__label" htmlFor="name">Product name</label>
            <input type="text" className="field__input" id="name"
              placeholder="Product name"
              ref={node => (productName = node)}
            />
          </div>
          <div className="body__field">
            <label className="field__label" htmlFor="quantity">Quantity</label>
            <input type="text" className="field__input field__input_type_number" id="quantity"
              placeholder="0"
              ref={node => (productQuantity = node)}
            />
          </div>
        </div>

        <div className="dialog__controls">
          <button type="button" className="controls__button" onClick={dialogClose}>Cancel</button>
          <button type="submit" className="controls__button controls__button_primary">Add</button>
        </div>
      </form>
    </div>
  );
};

AddProdDialog.propTypes = {
  dialogClose: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default AddProdDialog;
