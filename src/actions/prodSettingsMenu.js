export const ProdSettingsMenu = {
  SHOW: 'SHOW',
  HIDE: 'HIDE'
};

export const showProdSettingsMenu = (productId) => ({
  type: ProdSettingsMenu.SHOW,
  id: productId
});

export const hideProdSettingsMenu = () => ({
  type: ProdSettingsMenu.HIDE
});
