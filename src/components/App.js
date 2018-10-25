import React from 'react';
import PropTypes from 'prop-types';
import Header from '../containers/Header';
import Main from '../containers/Main';

import AddProdDialog from '../containers/AddProdDialog';

const getAddProdDialog = (shouldBeDisplayed) => (
  shouldBeDisplayed
    ? <AddProdDialog />
    : null
)

const App = ({ showAddProdDialog }) => (
  <div className="app">
    {getAddProdDialog(showAddProdDialog)}
    <Header />
    <Main />
  </div>
);

App.propTypes = {
  showAddProdDialog: PropTypes.bool.isRequired
};

export default App;
