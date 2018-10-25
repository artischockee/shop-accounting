import { AddProdDialog } from '../actions';

const showAddProdDialog = (state = false, action) => {
  switch (action.type) {
    case AddProdDialog.OPEN:
      return true;
    case AddProdDialog.CLOSE:
      return false;
    default:
      return state;
  }
};

export default showAddProdDialog;
