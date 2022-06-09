import React, { Component } from 'react';

import Journal from './components/Journal';
// import CreateJournalEntry from './CreateJournalEntry';
import Navbar from "./components/Navbar";

const App = props => {
  return (
    <>
    <Navbar />
    <Journal/>
    </>
  );
};
export default App;