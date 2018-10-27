export const Dialogs = {
  OPEN_ADD: 'OPEN_ADD',
  OPEN_EDIT: 'OPEN_EDIT',
  OPEN_DELETE: 'OPEN_DELETE',
  CLOSE_CURRENT: 'CLOSE_CURRENT'
};

export const closeCurrentDialog = () => ({
  type: Dialogs.CLOSE_CURRENT
});

export const openAddProdDialog = () => ({
  type: Dialogs.OPEN_ADD
});

export const openEditProdDialog = (id) => ({
  type: Dialogs.OPEN_EDIT,
  id
});

export const openDeleteProdDialog = (id) => ({
  type: Dialogs.OPEN_DELETE,
  id
});
