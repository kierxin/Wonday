import React from "react";
import { Route, Switch } from "react-router-dom";

import { AuthRoute } from "../util/route_util";

import NavHeader from "./landing/nav_header";
import LoginFormContainer from "./session_forms/login_form_container";
import SignupFormContainer from "./session_forms/signup_form_container";
import BoardContainer from "./board/board_container";


const App = () => (
    <>
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route path="/boards/:boardId" component={BoardContainer} />
            <Route exact path="/" component={NavHeader} />
        </Switch>
    </>
);


export default App;