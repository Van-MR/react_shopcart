import React from 'react';
import { BrowserRouter as Router, Switch, Route }  from 'react-router-dom'

import Cart from './pages/cart'
import Products from './pages/products'
import Nav from './components/mainNavgation'

function App() {
  return (
    <div className="App">
        <Router>
            <Nav></Nav>
            <Switch>
                <Route path="/" component = { Products } exact></Route>
                <Route path="/cart" component = { Cart } exact></Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
