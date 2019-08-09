import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component'

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
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
