import React from "react";
import { Route, Switch } from "react-router-dom";

import NavHeader from "./landing/nav_header";
import LoginFormContainer from "./session_forms/login_form_container";
import SignupFormContainer from "./session_forms/signup_form_container";


const App = () => (
    <>
        <Switch>
            <Route exact path="/login" component={LoginFormContainer} />
            <Route exact path="/signup" component={SignupFormContainer} />
            <Route exact path="/" component={NavHeader} />
        </Switch>
    </>
);


export default App;