import { connect } from "react-redux";

import Board from "./board";
import { logout } from "../../actions/session_actions";


const mSTP = state => ({
    user: state.entities.users[Object.keys(state.entities.users)[0]],
    workspace: state.entities.users[Object.keys(state.entities.users)[0]].workspace,
    board: state.entities.users[Object.keys(state.entities.users)[0]].boards[0]
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
});


export default connect(mSTP, mDTP)(Board);