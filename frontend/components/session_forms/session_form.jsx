import React from "react";
import { Link } from "react-router-dom";

import DemoLogin from "./demo_login";


class SessionForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {
                email: '',
                password: '',
                full_name: ''
            },
            page: 1
        }

        this.goNext = this.goNext.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.formErrors = this.formErrors.bind(this);
    }

    handleInput(formField) {
        return e => this.setState(
            { user: { ...this.state.user, [formField]: e.currentTarget.value } }
        );
    }

    goNext() {
        if (this.state.user.email.length < 1) {
            this.formErrors(this.props.formType);
        } else {
            this.setState({ page: 2 });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = Object.assign({}, this.state.user);
        this.props.processForm(user);
    }

    formErrors(formType) {
        if (this.props.errors.length > 0) {
            return (
                <ul id={`${formType}-session-form-errors`}>
                    {this.props.errors.map((error, i) => (
                        <li key={`error${i}`}>
                            {error}
                        </li>
                    ))}
                </ul>
            )
        }
    }

    render() {

        const formType = this.props.formType;
        const page = this.state.page;
        let continueBtnText = "";
        let submitBtnText = "";

        if (formType === "login") {
            continueBtnText = "Next →";
            submitBtnText = "Log in →";
        } else {
            continueBtnText = "Continue";
            submitBtnText = "Continue";
        };


        return(
            <main className={`${formType}-main`}>

                <form onSubmit={this.handleSubmit} 
                    className="session-form"
                    id={`${formType}-session-form`} >

                    {this.formErrors(formType)}

                    {(page === 1 || (page === 2 && formType === "login")) && (
                        <label id={`${formType}-email-label`}>
                            <span>Email</span>
                            <input type="text"
                                value={this.state.user.email}
                                onChange={this.handleInput("email")}
                                id={`${formType}-email-input`} />
                        </label>
                    )}

                    {(page === 1) && (
                        <button className="session-form-continue-btn"
                            onClick={this.goNext}
                            value="next"
                            id={`${formType}-continue-btn`} >
                            {continueBtnText}
                        </button>
                    )}

                    {(formType === "signup" && page === 2) && (
                        <label id={`${formType}-full-name-label`}>
                            <span>Full Name</span>
                            <input type="text"
                                value={this.state.user.full_name}
                                onChange={this.handleInput("full_name")}
                                id={`${formType}-full-name-input`} />
                        </label>
                    )}

                    {(page === 2) && (
                        <label id={`${formType}-password-label`}>
                            <span>Password</span>
                            <input type="password"
                                value={this.state.user.password}
                                onChange={this.handleInput("password")}
                                id={`${formType}-password-input`} />
                        </label>
                    )}

                    {(page === 2) && (
                        <button className="session-form-submit-btn"
                            value={formType}
                            type="submit"
                            id={`${formType}-submit-btn`} >
                            {submitBtnText}
                        </button>
                    )}

                    {(formType === "login" || page === 1) && (
                        <DemoLogin 
                            useDemo={this.props.useDemo.bind(this)} />
                    )}

                    {(formType === "login" || page === 1) && (
                        <div id="session-call-to-action">

                            {this.props.formType === "login" ? (
                                <>
                                    <p>Don't have an account yet?</p>
                                    <Link className="swap-session-form" to="/signup">
                                        Sign Up
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <p>Already have an account?</p>
                                    <Link className="swap-session-form" to="/login">
                                        Log In
                                    </Link>
                                </>
                            )}
                        </div>
                    )}

                </form>
                
            </main>
        )
    }

}


export default SessionForm;