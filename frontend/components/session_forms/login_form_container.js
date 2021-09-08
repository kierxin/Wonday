import { connect } from "react-redux";

import { login } from "../../actions/session_actions";
import LoginPage from "../session/login_page";


const mSTP = (state) => ({
    errors: state.errors.session,
    formType: 'login'
});


const mDTP = dispatch => ({
    processForm: user => dispatch(login(user)),
    useDemo: user => dispatch(login(user))
});


export default connect(mSTP, mDTP)(LoginPage);