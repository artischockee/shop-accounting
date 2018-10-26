export const Dialogs = {
  OPEN: 'OPEN',
  CLOSE: 'CLOSE'
};

// Add product

export const openAddProdDialog = () => ({
  type: Dialogs.OPEN
});

export const closeAddProdDialog = () => ({
  type: Dialogs.CLOSE
});

// Edit product

export const openEditProdDialog = () => ({
  type: Dialogs.OPEN
});

export const closeEditProdDialog = () => ({
  type: Dialogs.CLOSE
});
