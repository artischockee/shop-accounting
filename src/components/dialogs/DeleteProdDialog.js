import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import DialogTitle from '../../containers/dialogs/DialogTitle';
import DialogControls from '../../containers/dialogs/DialogControls';

const DeleteProdDialog = ({
  handleSubmit,
  initialValues
}) => (
  <div className="fullscreen-wrapper">
    <form className="dialog" onSubmit={handleSubmit}>

      <DialogTitle text="Delete product" />

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
      
      <DialogControls
        buttonCloseLabel="Cancel"
        buttonSubmitLabel="Delete"
      />

    </form>
  </div>
);

DeleteProdDialog.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'deleteProduct'
})(DeleteProdDialog);
