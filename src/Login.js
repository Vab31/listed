import React from 'react';
import '../src/Login.css'
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
    const { loginWithRedirect } = useAuth0();

    return ( <
        div className = "login-page" >
        <
        div className = "form" >
        <
        form className = "login-form" >
        <
        img src = 'https://www.1000springs.org.nz/static/img/icons/login.png'
        alt = "loading" / >
        <
        button className = 'Loginbtn'
        onClick = {
            () => loginWithRedirect() } > login < /button> <
        p className = "message" >
        Not registered ? < a href = "#" > Create an account < /a> <
        /p> <
        /form>

        <
        /div> <
        /div>

    )
}

export default Login