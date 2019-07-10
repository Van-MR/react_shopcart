import React from 'react';
import { BrowserRouter as Router, Switch, Route }  from 'react-router-dom'

import Cart from './pages/cart'
import Products from './pages/products'
import Nav from './components/mainNavgation'
import ShopContextProvider from './context/shop-context';

function App() {
  return (
    <div className="App">
        <ShopContextProvider>
            <Router>
                <Nav></Nav>
                <Switch>
                    <Route path="/" component = { Products } exact></Route>
                    <Route path="/cart" component = { Cart } exact></Route>
                </Switch>
            </Router>
        </ShopContextProvider>
    </div>
  );
}

export default App;
