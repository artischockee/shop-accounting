export * from './products';
export * from './dialogs';

export const SEARCH_VALUE_CHANGE = 'SEARCH_VALUE_CHANGE';

export const searchValueChange = (value) => ({
  type: SEARCH_VALUE_CHANGE,
  value
});

export const SWITCH_PRODUCT_SETTINGS_MENU = 'SWITCH_PRODUCT_SETTINGS_MENU';

export const switchSettingsMenu = (productId) => ({
  type: SWITCH_PRODUCT_SETTINGS_MENU,
  id: productId
});
