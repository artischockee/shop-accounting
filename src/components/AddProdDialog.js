import React from 'react';
import PropTypes from 'prop-types';

const AddProdDialog = (props) => (
  <div className="fullscreen-wrapper">
    <div className="add-prod-dialog">
      <h1>hello world</h1>
      <button onClick={props.dialogClose}>Close</button>
    </div>
  </div>
);

AddProdDialog.propTypes = {
  dialogClose: PropTypes.func.isRequired
};

export default AddProdDialog;
