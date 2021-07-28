import React, { useState, useEffect } from 'react';

const Signup = props => {
    return (
    <div className="container">
        <body>
        Signup Below
        <form method='POST' action='/signup'>
        <input name="username" type="text" placeholder="username"></input>
        <input name="password" type="password"></input>
        <input type='submit' value='Create User'></input>
        </form>
    </body>
</div>

)};

export default Signup;