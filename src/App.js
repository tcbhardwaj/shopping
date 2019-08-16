import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component'

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

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
        <Route path='/signin' component={SignInAndSignUp} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
