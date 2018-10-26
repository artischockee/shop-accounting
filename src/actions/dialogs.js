export const Dialogs = {
  OPEN_ADD: 'OPEN_ADD',
  OPEN_EDIT: 'OPEN_EDIT',
  CLOSE_ADD: 'CLOSE_ADD',
  CLOSE_EDIT: 'CLOSE_EDIT',
  CLOSE_ALL: 'CLOSE_ALL'
};

// Close all dialogs

export const closeAllDialogs = () => ({
  type: Dialogs.CLOSE_ALL
});

// Add product

export const openAddProdDialog = () => ({
  type: Dialogs.OPEN_ADD
});

export const closeAddProdDialog = () => ({
  type: Dialogs.CLOSE_ADD
});

// Edit product

export const openEditProdDialog = (id) => ({
  type: Dialogs.OPEN_EDIT,
  id
});

export const closeEditProdDialog = () => ({
  type: Dialogs.CLOSE_EDIT
});
