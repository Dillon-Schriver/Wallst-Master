import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
  } from "react-router-dom";

import FullProblem from './FullProblem.jsx';
// try using onclick state update and redirect tmrw: https://dev.to/projectescape/programmatic-navigation-in-react-3p1l
const Card = props => {
    return (
    <div className='card'>
        <Link to='/fullproblem1'>
        <div>
          <h4><b>Behavioral Interview Question</b></h4>
          <p>Example Behavioral interview question...</p>
        </div>
        </Link>
      </div>
)};

export default Card;

/**
 * This current redirects to a component underneath
     <Router>
    <div className='card'>

        <Link to='/behavioral_problem_1'>
        <div>
          <h4><b>Behavioral Interview Question</b></h4>
          <p>Example Behavioral interview question...</p>
        </div>
        </Link>
        <Route path='/behavioral_problem_1' component={FullProblem}/>
      </div>
      </Router> 
 
 */