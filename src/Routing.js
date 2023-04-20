import App from './App.js'
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import Login from './Login.js';

const Routing = () => {
    const { isAuthenticated } = useAuth0();

    return ( <
        BrowserRouter > {
            isAuthenticated ? ( <
                App / >
            ) : ( <
                Login / >
            )
        } <
        /BrowserRouter>
    )
}
export default Routing