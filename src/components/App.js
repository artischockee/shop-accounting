import React from 'react';
import PropTypes from 'prop-types';
import Header from '../containers/Header';
import Main from '../containers/Main';
import AddProdDialog from '../containers/AddProdDialog';

const App = ({ showAddProdDialog }) => (
  <div className="app">

    {showAddProdDialog ? <AddProdDialog /> : null}

    <Header />

    <Main />
  </div>
);

App.propTypes = {
  showAddProdDialog: PropTypes.bool.isRequired
};

export default App;
