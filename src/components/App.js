import React from 'react';
import PropTypes from 'prop-types';
import Header from '../containers/Header';
import Main from '../containers/Main';
import AddProdDialog from '../containers/AddProdDialog';
import EditProdDialog from '../containers/EditProdDialog';

const App = ({
  showAddProdDialog,
  showEditProdDialog
}) => (
  <div className="app">

    {showAddProdDialog ? <AddProdDialog /> : null}
    {showEditProdDialog ? <EditProdDialog /> : null}

    <Header />

    <Main />
  </div>
);

App.propTypes = {
  showAddProdDialog: PropTypes.bool.isRequired,
  showEditProdDialog: PropTypes.bool.isRequired
};

export default App;
