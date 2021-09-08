import React from "react";
import { Link } from "react-router-dom";

import SessionForm from "../session_forms/session_form";


class SignupPage extends React.Component {


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
        return (
            <>
                <main id="signup-main">
                    <div className="signup-container">
                        <div className="signup-left-side">
                            {this.sessionForm()}
                        </div>
                        <div className="signup-right-side">
                            <img src={window.logoURL} alt="person" />
                            <p>Fill in your details so<br />
                                you can log in later
                            </p>
                        </div>
                    </div>
                </main>
                <div id="signup-page-bg"></div>
            </>
        )
    }

}


export default SignupPage;