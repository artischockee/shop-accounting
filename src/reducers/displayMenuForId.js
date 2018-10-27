import { ProdSettingsMenu } from '../actions';

const displayMenuForId = (state = null, action) => {
  switch (action.type) {
    case ProdSettingsMenu.SHOW:
      return action.id;
    case ProdSettingsMenu.HIDE:
      return null;
    default:
      return state;
  }
};

export default displayMenuForId;
