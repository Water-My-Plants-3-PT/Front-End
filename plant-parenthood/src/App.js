import React from 'react';
import logo from './logo.svg';
import LogIn from "./components/logIn";
import Home from "./components/home";
import About from "./components/about";
import SignUp from "./components/signUp";
import UserPlants from "./components/userPlants";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';


function App() {
  return (
    <div className="App">
      
      <Router>
        <nav>
          <button>
            <Link to="/">Home</Link>
          </button>
          <button>
            <Link to="/about">About</Link>
          </button>
          <button>
            <Link to="/sign-up">Sign Up</Link>
          </button>
          <button>
            <Link to="/store">Log In</Link>
          </button>
          <button>
            <Link to="/user-plants">User Plants</Link>
          </button>
        </nav>
          <h1>Welcome to Plant Parenthood 🌱💦🌷</h1>
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
          <Route exact path="/store">
            <LogIn />
          </Route>
          <Route exact path="/user-plants">
            <UserPlants />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
