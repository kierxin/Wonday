import { connect } from "react-redux";

import Board from "./board";
import { logout } from "../../actions/session_actions";


const mSTP = state => {

    return {
        user: state.user,
    }
};

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
});


export default connect(mSTP, mDTP)(Board);