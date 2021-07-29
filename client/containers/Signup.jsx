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
            username: 'Dill',
            password: 'Scout'
        };
        this.onSubmitRegister = this.onSubmitRegister.bind(this);
        this.onChangeUserName= this.onChangeUserName.bind(this);
        this.onChangeUserPW = this.onChangeUserPW.bind(this);
    }

    // dispatch = useDispatch(); this can only be used in functional components
    // mapDispatchToProps = (dispatch) => {
    //     return {
    //         register,
    //     }
    // };

    // mapStateToProps = state =>{
    //     isLoggedIn: state.isLoggedIn,
    // }

    onSubmitRegister(e){
        e.preventDefault();
        console.log("now activing onSubmitRegister");
        console.log("this.state", this.state);
        dispatch(register(this.state.username, this.state.password))
        .then(() => {
            console.log("logged in");
        })
        .catch((error) => console.log(error));

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
            <h1>Are you currently logged in?</h1> 
            <form method='POST' action='/signup'>
            <input name="username" type="text" value={this.state.username} onChange={this.onChangeUserName}></input>
            <input name="password" type="password" value={this.state.password} onChange={this.onChangeUserPW}></input>
            <input type='submit' value='Create User' onClick={this.onSubmitRegister}></input>
            </form>
        </div>
    );
    }
};
//connect returns a function which takes our component as an argument and maps the props to state and dispatch from store respectively
// export default connect(mapStateToProps, mapDispatchToProps)(Signup); 
export default Signup;