import { Dialogs } from '../actions';

const initialState = {
  showAddProd: false,
  showEditProd: {
    show: false,
    id: null
  }
};

const dialogs = (state = initialState, action) => {
  switch (action.type) {
    case Dialogs.OPEN_ADD:
      return Object.assign({}, state, {
        showAddProd: true
      });
    case Dialogs.OPEN_EDIT:
      return Object.assign({}, state, {
        showEditProd: {
          show: true,
          id: action.id
        }
      });
    case Dialogs.CLOSE_ALL:
    case Dialogs.CLOSE_ADD:
    case Dialogs.CLOSE_EDIT:
      return initialState;
    default:
      return state;
  }
};

export default dialogs;
