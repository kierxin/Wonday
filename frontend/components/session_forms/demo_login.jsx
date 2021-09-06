import React from 'react';


class DemoLogin extends React.Component {

    constructor(props) {
        super(props);
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
    }

    handleDemoLogin() {
        const demoUser = {
            email: 'leslie_rau@yahoo.com',
            password: 'lrau123',
            full_name: 'Leslie Rau'
        }
        
        this.props.processForm(demoUser);
    }

    render() {
        return(
            <div className="demo-login-container">
                <p>Or Sign In With</p>
                <button id="demo-login-btn" onClick={this.handleDemoLogin}>
                    Demo User
                </button>
            </div>
        )
    }

}


export default DemoLogin;