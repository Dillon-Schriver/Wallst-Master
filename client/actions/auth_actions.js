/**
 * Action Creators for authentication behavior
 * 
 */
 const API_URL = "http://localhost:8080/users/";
import react from 'react';

import * as types from '../constants/type.js';

export const login = (username, password) => (dispatch) => {

    const userForm = {
        username: this.username,
        password: this.password
    };

    fetch('http://localhost:3000/users/login', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userForm)
    })
    .then((res) => {
        console.log('username submitted');
        res.json();
    })
    .then((res) => {
        dispatch()
        console.log("this is the data from login post", res);
        dispatch( type: types.LOGIN_SUCCESS)
    })
    .catch(error => {
        console.log(error);
        dispatch({ type: types.LOGIN_FAIL });
    });
};

export const register = (username, password) => (dispatch) => {

    const userForm = {
        username: this.username,
        password: this.password
    };

    fetch('http://localhost:3000/users/create', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userForm)
    })
    .then((res) => {
        console.log('username submitted');
        res.json();
    })
    .then((res) => {
        dispatch()
        console.log("this is the data from login post", res);
        dispatch({ type: types.REGISTER_SUCCESS })
    })
    .catch(error => {
        console.log(error);
        dispatch({ type: types.REGISTER_FAIL });
    });
};
