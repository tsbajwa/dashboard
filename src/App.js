import React from 'react';
import { Route, Switch } from 'react-router-dom'

import ProjectPage from './pages/ProjectPage';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={ProjectPage} />
    </Switch>
  );
}

export default App;