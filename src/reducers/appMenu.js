import { SWITCH_APP_MENU } from '../actions';

const appMenu = (state = false, action) => {
  switch (action.type) {
    case SWITCH_APP_MENU:
      return !state;
    default:
      return state;
  }
};

export default appMenu;
