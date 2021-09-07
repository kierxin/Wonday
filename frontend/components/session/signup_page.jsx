import React from "react";
import { Link } from "react-router-dom";

import SessionForm from "../session_forms/session_form";


class SignupPage extends React.Component {


    sessionForm() {
        return (
            <SessionForm
                processForm={this.props.processForm}
                errors={this.props.errors}
                formType={this.props.formType} />
        )
    }

    render() {
        return (
            <>
                <div className="signup-container">
                    <div className="signup-left-side">
                        <h1>Welcome to wonday.com</h1>
                        <p>Let's get started</p>
                        {this.sessionForm()}
                    </div>
                    <div className="signup-right-side">
                        <p>hi</p>
                    </div>
                </div>
            </>
        )
    }

}


export default SignupPage;