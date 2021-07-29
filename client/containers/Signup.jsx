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
        this.onChangeUserName= this.onChangeUserName.bind(this);
        this.onChangeUserPW= this.onChangeUserPW.bind(this);
    }

    onSubmit(e){
        e.preventDefault();

        const userForm = {
            username: this.state.username,
            password: this.state.password
        };

        this.setState({ username: '', password: '' });
    }

    onChangeUserName (e) {
        console.log(e.target.value);
        this.setState({ username: e.target.value });
    }

    onChangeUserPW = e => {
        this.setState( { password: e.target.value })
    }

    render() {
        return(
        <div className="content">
            <p>Signup Below</p>
            <form method='POST' action='/signup'>
            <input name="username" type="text" value={this.state.username} onChange={this.onChangeUserName}></input>
            <input name="password" type="password" value={this.state.password} onChange={this.onChangeUserPW}></input>
            <input type='submit' value='Create User' onClick={this.onSubmit}></input>
            </form>
        </div>
    );
    }
};

export default Signup;