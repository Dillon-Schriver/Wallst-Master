import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { render } from 'react-dom';
import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';

//import our action to fire the post request
// import * as auth_actions from '../actions/auth_actions.js';

class Signup extends Component  {
    constructor(props){
        super(props);
        this.state = {
            username_create: 'Dill',
            password_create: 'Scout',
            username: 'login here',
            password: '',
            isLoggedIn: false,
            logInFailed: false,
            login_msg: "You are not currently logged in, create an account or login below",
        };
        this.onSubmitCreate = this.onSubmitCreate.bind(this);
        this.onSubmitLogin = this.onSubmitLogin.bind(this);
        this.onChangeUserName= this.onChangeUserName.bind(this);
        this.onChangeUserPW = this.onChangeUserPW.bind(this);
        this.onChangeUserNameCreate= this.onChangeUserNameCreate.bind(this);
        this.onChangeUserPWCreate = this.onChangeUserPWCreate.bind(this);
    }
    // REDUX section - comment it all out XD
    // dispatch = useDispatch(); this can only be used in functional components
    // mapDispatchToProps = (dispatch) => {
    //     return {
    //         register
    //     }
    // }

    // mapStateToProps = state => {
    //     isLoggedIn: state.isLoggedIn
    // }

    onSubmitLogin(e){
        e.preventDefault();
        console.log("now activing onSubmitLogin");
        // console.log("this.state", this.state);
        let login_update = this.state.login_msg; 
        const userForm = {
            username: this.state.username,
            password: this.state.password
        };
        console.log("userForm", userForm);
        // Non redux approach - comment out for redux
        fetch('http://localhost:3000/users/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: userForm.username,
                password: userForm.password
            })
        })
        .then((res) => {
            console.log('login submitted');
            console.log('res pre json', res);
            return res.json();
        })
        .then((res) => {
            console.log("res", res);
            if (res == 'success'){
                console.log('successfully logged in');
                console.log(userForm.username);
                login_update = 'Welcome ' + userForm.username + ' you are successfully logged in';
                this.setState({ username: '', password: '', login_msg: login_update});
            } else {
                console.log('login failed ');
                login_update = "You are not currently logged in, create an account or login below";
                this.setState({ username: '', password: '', login_msg: login_update});
            }
        })
        .catch((err) => {
            console.log('error - something went wrong with your login');
            login_update = "You are not currently logged in, create an account or login below";
            this.setState({ username: '', password: '', login_msg: login_update});
        })
        this.setState({ username: '', password: '', login_msg: login_update});
    }

    onSubmitCreate(e){
        e.preventDefault();

        const userForm = {
            username: this.state.username_create,
            password: this.state.password_create
        };
        console.log("userForm", userForm);

        // Non redux approach - comment out for redux
        fetch('http://localhost:3000/users/create', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: userForm.username,
            password: userForm.password
        })
        })
        .then((res) => {
            console.log('username submitted');
            res.json();
        })
        .then((res) => {
            console.log('successfully created user');
            console.log(res);
            this.setState( { isLoggedIn: false, logInFailed: false });
        })
        .catch((err) => {
            console.log('error - login credentials rejected');
            this.setState( { isLoggedIn: false, logInFailed: true });
        });

        this.setState({ username_create: '', password_create: '' });
    }

    onChangeUserName (e) {
        console.log(e.target.value);
        this.setState({ username: e.target.value });
    }

    onChangeUserPW = e => {
        this.setState( { password: e.target.value })
    }

    onChangeUserNameCreate (e) {
        console.log(e.target.value);
        this.setState({ username_create: e.target.value });
    }

    onChangeUserPWCreate = e => {
        this.setState( { password_create: e.target.value })
    }

    render() {
        const loggedIn = this.state.isLoggedIn;
        const failed = this.state.logInFailed;
        let login_msg = <h1>Welcome {this.username}, you are successfully logged in</h1>;
        let error_msg= <p></p>;
        // let user = this.state.username;
        // if (loggedIn){
        //     let msg = `Welcome ${this.state.username}, you are successfully logged in`;
        //     login_msg = <h1>{msg}</h1>; 
        // } else {
        //     login_msg = <h1>You are not currently logged in, create an account or login below</h1>;
        // }
        if (!error_msg) error_msg = <p>There was an error with your login or account creation</p>;



        return(
        <div className="content">
            <h1>{this.state.login_msg}</h1>
            <h2>Create an Account:</h2> 
            <form method='POST' action='/signup'>
            <input name="username_create" type="text" value={this.state.username_create} onChange={this.onChangeUserNameCreate}></input>
            <input name="password_create" type="password" value={this.state.password_create} onChange={this.onChangeUserPWCreate}></input>
            <input type='submit' value='Create User' onClick={this.onSubmitCreate}></input>
            </form>
            <h3>Log in to an existing account:</h3> 
            <form method='POST' action='/login'>
            <input name="username" type="text" value={this.state.username} onChange={this.onChangeUserName}></input>
            <input name="password" type="password" value={this.state.password} onChange={this.onChangeUserPW}></input>
            <input type='submit' value='Login' onClick={this.onSubmitLogin}></input>
            </form>
            {error_msg}
        </div>
    );
    }
};
//connect returns a function which takes our component as an argument and maps the props to state and dispatch from store respectively
// export default connect(mapStateToProps, mapDispatchToProps)(Signup); 

// Uncomment for NON REDUX
export default Signup;