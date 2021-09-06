import { connect } from "react-redux";

import { createNewUser } from "../../actions/session_actions";
import SessionForm from "./session_form";
// import SignupForm from "./signup_form";


const mSTP = (state) => ({
    errors: state.errors.session,
    formType: 'signup'
});


const mDTP = dispatch => ({
    processForm: user => dispatch(createNewUser(user))
});


export default connect(mSTP, mDTP)(SessionForm);
// export default connect(mSTP, mDTP)(SignupForm);