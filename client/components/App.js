import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import CreateJournalEntry from './CreateJournalEntry';
import Journal from './Journal';

const App = props => {
  return (
    <div className="router">
      <main>
        {/*
            NOTE: The syntax below is for React-Router library
            https://reacttraining.com/react-router/web/guides/quick-start
        */}
        <Switch>
          <Route
            exact
            path="/"
            component={Journal}
          />
          <Route
            exact
            path="/entry"
            component={CreateJournalEntry}
          />
        </Switch>
      </main>
    </div>
  );
};
export default App;