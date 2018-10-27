export * from './products';
export * from './dialogs';
export * from './prodSettingsMenu';

export const SEARCH_VALUE_CHANGE = 'SEARCH_VALUE_CHANGE';

export const searchValueChange = (value) => ({
  type: SEARCH_VALUE_CHANGE,
  value
});

export const SWITCH_APP_MENU = 'SWITCH_APP_MENU';

export const switchAppMenu = () => ({
  type: SWITCH_APP_MENU
});
