import React from 'react';
import PropTypes from 'prop-types';

const ProductCardMenu = ({
  className,
  showDeleteProdDialog,
  showEditProdDialog
}) => (
  <div className={className}>

    <button
      className="button button_hstyle_normal"
      onClick={showEditProdDialog}
    >
      Edit
    </button>

    <button
      className="button button_hstyle_warning"
      onClick={showDeleteProdDialog}
    >
      Delete
    </button>

  </div>
);

ProductCardMenu.propTypes = {
  className: PropTypes.string.isRequired,
  showDeleteProdDialog: PropTypes.func.isRequired,
  showEditProdDialog: PropTypes.func.isRequired
};

export default ProductCardMenu;
