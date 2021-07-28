import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { render } from 'react-dom';
import axios from 'axios';

class Signup extends Component  {
    constructor(props){
        super(props);
        this.state = {
            username: 'Dill',
            password: 'Scout'
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e){
        const userForm = {
            username: this.state.username,
            password: this.state.password
        };

        axios.post('http://localhost:3000/users/create', userForm)
            .then((res) => {
                console.log(res.data);
            })
            .catch(error => {
                console.log(error);
            });

        this.setState({ username: 'empty user', password: 'empty pw' });
    }

    render() {
        return(
        <div className="container">
            <body>
            Signup Below
            <form method='POST' action='/signup'>
            <input name="username" type="text" value={this.state.username}></input>
            <input name="password" type="password" value={this.state.password}></input>
            <input type='submit' value='Create User' onClick={this.onSubmit}></input>
            </form>
            </body>
        </div>
    );
    }
};

export default Signup;