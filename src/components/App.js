import React from 'react';
import PropTypes from 'prop-types';
import Header from '../containers/Header';
import AppMenu from '../containers/AppMenu';
import Main from '../containers/Main';
import AddProdDialog from '../containers/AddProdDialog';
import EditProdDialog from '../containers/EditProdDialog';
import DeleteProdDialog from '../containers/DeleteProdDialog';

const App = ({
  showAddProdDialog,
  showDeleteProdDialog,
  showEditProdDialog
}) => (
  <div className="app">

    {showAddProdDialog ? <AddProdDialog /> : null}
    {showDeleteProdDialog ? <DeleteProdDialog /> : null}
    {showEditProdDialog ? <EditProdDialog /> : null}

    <Header />
    <AppMenu />
    <Main />
  </div>
);

App.propTypes = {
  showAddProdDialog: PropTypes.bool.isRequired,
  showDeleteProdDialog: PropTypes.bool.isRequired,
  showEditProdDialog: PropTypes.bool.isRequired
};

export default App;
