/**
 * 
 * Entry point for the application, hangs react app off of the id=root in index.html, 
 *  which is the first div in index.html
 * 
 */


import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store';

//here we will bring in the bundled styles - comment out for now
import styles from './scss/application.scss'

// now render top level component and react will handle below

// COMMENT / UNCOMMENT PROVIDER for REDUX
render (
    // <Provider store={store}>
        <App />,
    // </Provider>,
    document.getElementById('root'),
);
