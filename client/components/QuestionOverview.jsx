import React, { useState, useEffect } from 'react';

const QuestionOverview = (props) => {
    return (
        <div className='OverviewQ'>
            <h2>{props.question}</h2>
            <p>{props.boilerplate}</p>
        </div>
)};

export default QuestionOverview;