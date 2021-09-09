import React from "react";
import { Route, Switch } from "react-router-dom";

import { AuthRoute } from "../util/route_util";

import LoginFormContainer from "./session_forms/login_form_container";
import SignupFormContainer from "./session_forms/signup_form_container";
import BoardContainer from "./board/board_container";
import LandingPage from "./landing/landing_page";


const App = () => (
    <>
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route path="/api" component={BoardContainer} />
            <AuthRoute exact path="/" component={LandingPage} />
        </Switch>
    </>
);


export default App;