import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login.component";


function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <Link className="navbar-brand">Small Marketing</Link>
        <Link className="nav-link" to={"/sign-in"}>About</Link>
        <Link className="nav-link" to={"/sign-in"}>Features</Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            <Route>
              <Link className="nav-link" to={"/sign-in"}>Login</Link>

              <Link className="nav-link" to={"/sign-in"}>Sign up</Link>
              <Link className="nav-link" to={"/sign-in"}>Logout</Link>
            </Route>
          </ul>
        </div>
      </nav>

      <div className="div-login">
        <div className="div-login-parent">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />

          </Switch>

        </div>
      </div>
    </div>
  </Router >
  );
}

export default App;