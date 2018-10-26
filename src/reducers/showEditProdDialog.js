import { Dialogs } from '../actions';

const showAddProdDialog = (state = false, action) => {
  switch (action.type) {
    case Dialogs.OPEN:
      return true;
    case Dialogs.CLOSE:
      return false;
    default:
      return state;
  }
};

export default showAddProdDialog;
