import './App.css';
import { Navbar } from './Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { Home } from './components/home/Home';
import { Support } from './components/support/support';
import { Cart } from './components/cart/cart';
import Register from './components/login&Register/register';
import Login from './components/login&Register/login';
import { Products } from './components/products/products';

function App() {
  return (
    <>
      <Router>
          <Route exact path="/Register">
            <Register/>
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
        <br /> <br />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/support">
            <Support/>
          </Route>
          <Route exact path="/products">
            <Products/>
          </Route>
          <Route exact path="/cart">
            <Cart/>
          </Route>
        </Switch>

      </Router>
      
    </>
  );
}

export default App;
