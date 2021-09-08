import React from "react";

import DemoLogin from "./demo_login";
import { ContinueBtn, SubmitBtn } from "./session_btns";
import CallToAction from "./call_to_action";
import Input from "./input";


class SessionForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {
                email: '',
                password: '',
                full_name: ''
            },
            page: 1,
            error: null
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.goNext = this.goNext.bind(this);
    }


// HELPERS
    handleInput(formField) {
        return e => this.setState(
            { user: { ...this.state.user, [formField]: e.currentTarget.value },
              error: null }
        );
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.state.user.password.length < 6 && this.state.page === 2) {
            this.setState({ error: "Password is too short" });
        } else if (this.state.page === 2) {
            let user = Object.assign({}, this.state.user);
            this.props.processForm(user);
            this.setState({ error: "Invalid username or password" });
        }
    }

    goNext() {
        const email = this.state.user.email;
        if (email.length < 3 || (
            !email.includes("@") ||
             email.indexOf("@") === 0 ||
             email.indexOf("@") === (email.length - 1) ||
            !email.includes(".") ||
             email.indexOf(".") === 0 ||
             email.indexOf(".") === (email.length - 1)
        )) {
            this.setState({ error: "Invalid email" });
        } else {
            this.setState({ page: 2 });
        }
    }

    dynamicFormErrors(formType, message = "Unknown error occurred") {
        if (this.state.error) {
            return(
                <p id={`${formType}-session-form-errors`}>
                    {message}
                </p>
            )
        } 
    }

    onSubmitFormErrors() {
        if (this.props.errors.length > 0) {
            return (
                <p id={`${this.state.formType}-session-form-errors`}>
                    {this.props.errors[0]}
                </p>
            )
        }
    }

    signupTitle(page) {
        if (page === 1) {
            return(
                <div>
                    <h1 id="signup-title-1">
                        Welcome to wonday.com
                    </h1>
                    <p id="signup-subtitle-1">
                        Let's get started with a few simple steps
                    </p>
                </div>
            )
        } else {
            return(
                <div>
                    <h1 id="signup-title-2">
                        Set up your account
                    </h1>
                    <p id="signup-subtitle-2">
                        Fill in your profile details
                    </p>
                </div>
            )      
        }
    }


// RENDER FUNCTION
    render() {

        const formType = this.props.formType;
        const page = this.state.page;
        const handleInput = this.handleInput;
        const user = this.state.user;

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

                {(formType === "signup") && (
                    this.signupTitle(page)
                )}
                

                <form onSubmit={this.handleSubmit} 
                    className="session-form"
                    id={`${formType}-session-form`} >

                    {this.dynamicFormErrors(formType, this.state.error)}

                    {(page === 1 || (page === 2 && formType === "login")) && (
                        <Input type={formType}
                                field="email"
                                value={user.email}
                                handle={handleInput}
                        />
                    )}

                    {(page === 1) && (
                        <ContinueBtn
                            type={formType}
                            text={continueBtnText}
                            goNext={this.goNext} 
                        />
                    )}

                    {(formType === "signup" && page === 2) && (
                        <Input type={formType}
                            field="full_name"
                            value={user.full_name}
                            handle={handleInput}
                        />
                    )}

                    {(page === 2) && (
                        <Input type={formType}
                            field="password"
                            value={user.password}
                            handle={handleInput}
                        />
                    )}

                    {(page === 2) && (
                        <SubmitBtn type={formType} text={submitBtnText} />
                    )}

                    {(formType === "login" || page === 1) && (
                        <DemoLogin useDemo={this.props.useDemo.bind(this)} />
                    )}

                    {(formType === "login" || page === 1) && (
                        <CallToAction formType={formType} />
                    )}

                </form>
                
            </main>
        )
    }

}


// EXPORT
export default SessionForm;