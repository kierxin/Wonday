import React from "react";
import DemoLogin from "./demo_login";


class SessionForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            fullName: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(formField) {
        return e => {
            this.setState({ [formField]: e.target.value });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    render() {

        const formType = this.props.formType;
        let submitBtnText = ""

        formType === "login" ? (submitBtnText = "Log in →") : (
            submitBtnText = "Continue");

        return(
            <main>
                <h1>Log In</h1>

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
                                value={this.state.fullName}
                                onChange={this.handleInput("fullName")} />
                        </label>
                    )}

                    <button className="session-form-submit-btn"
                            value={formType}
                            type="submit" >
                        {submitBtnText}
                    </button>
                </form>

                <DemoLogin formType={formType} 
                            processForm={this.props.processForm} />
            </main>
        )
    }

}


export default SessionForm;