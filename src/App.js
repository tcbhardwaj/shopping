import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>hats page</h1>
  </div>
)

const PageNotFound = () => (
  <div>
    <h1>Page not found</h1>
  </div>
)

function App() {
  return (
    <div >
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
