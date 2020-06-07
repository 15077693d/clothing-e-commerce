import React from 'react';
import './App.css';
import { HomePage } from './pages/homepage/homepage.component'
import { Route, Switch } from 'react-router-dom';
import { ShopPage } from './pages/shop/shop.component'
const ItemPage = (props) => (
  <div>
    <h1>{props.match.params.item}</h1>
  </div>
)
function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/shop/:item' component={ItemPage} />
      </Switch>

    </div>

  );
}

export default App;
