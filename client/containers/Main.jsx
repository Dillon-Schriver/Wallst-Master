/**
 * 
 * Top level container serving homepage
 * 
 * Uses React Routes to route to various pages
 */
import React from 'react';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

//React component imports for routes
import Home from './Home.jsx';
import Signup from './Signup.jsx';
import ProblemsOverview from './ProblemOverview.jsx';
import About from '../components/About.jsx';
import FullProblem from '../components/FullProblem.jsx';

//style import
import styles from '../scss/application.scss'

//image imports
import logoimg from '../assets/bear vs. bull orange.jpg';

//TODO - future component imports here

// TODO - mapStateToProps

// TODO - mapDispatchToProps

// Main container - TODO formatting and add reac tomponents in h1
const Main = props => (
    <Router>
        <nav className="topnav">
            <div>
            <img className='img' src={logoimg}></img> 
            </div> 
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/problems_index">Problems</Link>
            </li>
            <li>
              <Link to="/signup">Login</Link>
            </li>
            <li> [current user] </li>
          </ul>
        </nav>
      <Switch>
          <Route
            exact
            path="/"
            component={Home}
          />
          <Route
            exact
            path="/signup"
            component={Signup}
          />
            <Route
            exact
            path="/fullproblem1"
            component={FullProblem}
          />
          <Route
            exact
            path="/problems_index"
            component={ProblemsOverview}
          />
          <Route
            exact
            path="/about"
            component={About}
          />

        </Switch>
    </Router>
  );

// TODO - uncomment for redux
//   export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
export default Main;

/**
 * 
 *           <Route
            exact
            path="/signup"
            component={Signup}
          />
          <Route
            exact
            path="/problems"
            component={Problems}
          />



 * 
 */