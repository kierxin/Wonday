import React from "react";
// import { Route } from "react-router-dom";

import { AuthRoute, ProtectedRoute } from "../util/route_util";

import LoginFormContainer from "./session_forms/login_form_container";
import SignupFormContainer from "./session_forms/signup_form_container";
import BoardContainer from "./board/board_container";
import SplashPage from "./splash/splash_page";


const App = () => (
    <>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <ProtectedRoute path="/api/" component={BoardContainer} />
            <AuthRoute exact path="/" component={SplashPage} />
    </>
);


export default App;