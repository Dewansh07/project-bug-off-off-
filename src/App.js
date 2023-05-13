import './App.css';
import { Navbar } from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { Home } from './components/Home';
import { About } from './components/About';
import { Features } from './components/Features';
import { Trainers } from './components/Trainers';
import { Blogs } from './components/Blogs';
import { Packages } from './components/packages';
import { Plans } from './components/Plans';

function App() {
  return (
    <>
      <Router>

        <Navbar />
        <br /> <br />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/features">
            <Features/>
          </Route>
          <Route exact path="/trainers">
            <Trainers/>
          </Route>
          <Route exact path="/blogs">
            <Blogs/>
          </Route>
          <Route exact path="/Packages">
            <Packages/>
          </Route>
          <Route exact path="/plans">
            <Plans/>
          </Route>
        </Switch>

      </Router>
      
    </>
  );
}

export default App;
