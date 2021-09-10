import { connect } from "react-redux";

import { createNewUser, login } from "../../actions/session_actions";
import SignupPage from "../session/signup_page";


const mSTP = (state) => ({
    errors: state.errors.session,
    formType: 'signup'
});


const mDTP = dispatch => ({
    processForm: user => (
        dispatch(createNewUser(user))
    ),
    useDemo: user => dispatch(login(user))
});


export default connect(mSTP, mDTP)(SignupPage);