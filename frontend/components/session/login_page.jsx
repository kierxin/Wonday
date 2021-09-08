import React from "react";
import { Link } from "react-router-dom";

import logo from "../../../app/assets/images/wonday-logo.png";
import SessionForm from "../session_forms/session_form";


class LoginPage extends React.Component {


    sessionForm() {
        return (
            <SessionForm
                processForm={this.props.processForm}
                useDemo={this.props.useDemo}
                errors={this.props.errors}
                formType={this.props.formType} />
        )
    }

    render() {
        return(
            <>
                <div className="login-topbar">
                    <Link to="/" id="logo">
                        <img src={logo} alt="w logo" id="w-logo" />
                        wonday
                    </Link>
                </div>
                <div className="login-container">
                    <h1>Log in to your account</h1>
                    {this.sessionForm()}
                </div>
            </>
        )  
    }

}


export default LoginPage;