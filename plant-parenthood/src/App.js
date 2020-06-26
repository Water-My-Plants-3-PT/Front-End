import React from 'react';
import logo from './logo.svg';
import LogIn from "./components/logIn";
import Home from "./components/home";
import About from "./components/about";
import SignUp from "./components/signUp";
import UserPlants from "./components/userPlants";
import PrivateRoute from './privateRoute';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';


function App() {
  return (
    <div className="App">
      
      <Router>
        <nav>
          <section className="sec-1">
            <a>
              <Link to="/" className="link">Home</Link>
            </a>
            <a>
              <Link to="/about" className="link">About</Link>
            </a>
          </section>

          <section className="sec-2">
            <a>
              <Link to="/sign-up" className="link">Sign Up</Link>
            </a>
            <a>
              <Link to="/login" className="link">Log In</Link>
            </a>
            <a>
              <Link to="/user-plants" className="link">User Plants</Link>
            </a>
          </section>

        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/sign-up">
            <SignUp />
          </Route>
          <Route exact path="/login">
            <LogIn />
          </Route>
          <Route exact path="/user-plants" component={UserPlants} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
