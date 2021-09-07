import React from "react";
import { Link } from "react-router-dom";

import DemoLogin from "./demo_login";


class SessionForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            full_name: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);

        console.log(this.props);

    }

    handleInput(formField) {
        return e => this.setState({
            [formField]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    formErrors() {
        return(
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    render() {

        const formType = this.props.formType;
        let submitBtnText = ""

        formType === "login" ? (
            submitBtnText = "Log in →") : (
            submitBtnText = "Continue");

        return(
            <main>
                <h1>{formType}</h1>

                {this.formErrors()}

                <form onSubmit={this.handleSubmit} className="session-form">
                    <label>Email
                        <input type="text"
                                value={this.state.email}
                                onChange={this.handleInput("email")} />
                    </label>
                    <label>Password
                        <input type="text"
                                value={this.state.password}
                                onChange={this.handleInput("password")} />
                    </label>

                    {(formType === "signup") && (
                        <label>Full Name (Optional)
                            <input type="text"
                                value={this.state.full_name}
                                onChange={this.handleInput("full_name")} />
                        </label>
                    )}

                    <button className="session-form-submit-btn"
                            value={formType}
                            type="submit" >
                        {submitBtnText}
                    </button>
                </form>

                <DemoLogin processForm={this.props.processForm.bind(this)} />

                <p id="session-call-to-action">
                    Don't have an account yet?
                    {this.props.formType === "login" ? (
                        <Link className="swap-session-form" to="/signup">
                            Sign Up
                        </Link>
                    ) : (
                        <Link className="swap-session-form" to="/login">
                            Log In
                        </Link>
                    )}
                </p>
            </main>
        )
    }

}


export default SessionForm;