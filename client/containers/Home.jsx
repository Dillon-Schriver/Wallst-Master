import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import background from '../assets/Laptopcharts_smaller.PNG';

const Home = props => {
    return (
    <div>
        <img src={background} className="container" ></img> 
        <div className='top-left'>Ace your investment banking and private equity technical interviews </div>
    </div>

)};

export default Home;