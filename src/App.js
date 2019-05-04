import React, { Fragment } from 'react';
import './App.css';
import { NavBar } from './components/nav';
import { AppProvider } from './context/context';

const App = () => {
  return (
    <AppProvider>
      <Fragment>
        <NavBar />
      </Fragment>
    </AppProvider>
  );
}

export default App;
