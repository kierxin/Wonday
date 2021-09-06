import { connect } from "react-redux";

import { login } from "../../actions/session_actions";
import DemoLogin from "./demo_login";


const mDTP = dispatch => ({
    processForm: user => dispatch(login(user))
});


export default connect(null, mDTP)(DemoLogin);