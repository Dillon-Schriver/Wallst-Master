import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Card from '../components/ProblemCard.jsx'

const ProblemsOverview = props => {
    return (
    <div className="container">
        <h1 id="header">Practice proven interview questions and master your technical skills</h1>
      <main>
        <Card key={0}/>
        <Card key={1}/>
        <Card key={2}/>
        <Card key={3}/>
      </main>
    </div>

)};

export default ProblemsOverview;