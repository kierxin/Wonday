import React from 'react';
import { Link } from "react-router-dom";


class DemoLogin extends React.Component {

    constructor(props) {
        super(props);
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
    }

    handleDemoLogin() {
        const demoUser = {
            email: 'leslie_rau@yahoo.com',
            password: 'lrau123',
            fullName: 'Leslie Rau'
        }
        console.log(this.props);
        this.props.processForm(demoUser);
    }

    render() {
        return(
            <div className="demo-login-container">
                <p>Or Sign In With</p>
                <button id="demo-login-btn" onClick={this.handleDemoLogin}>
                    Demo User
                </button>

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
            </div>
        )
    }

}


export default DemoLogin;