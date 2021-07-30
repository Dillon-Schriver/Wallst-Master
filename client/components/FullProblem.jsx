import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import QuestionOverview from './QuestionOverview.jsx';
import Explanation from './Explanation.jsx';
import ScratchPad from './Scratchpad.jsx';

const FullProblem = props => {
    return (
    <div className='content'>
      <div className='problemwrap'>
      <QuestionOverview question={'1. Gain On The Sale of An Asset - Effect on Financial Statement'} 
        boilerplate={"BlAmazon has decided that it simply cannot compete with MacroSoft and has decided to divest its inhouse B2B software tools business and wishes to divest."} />
        <Explanation/>
        <ScratchPad/>
        <button> Submit your solution</button>
      </div>
    </div>
)};

export default FullProblem;