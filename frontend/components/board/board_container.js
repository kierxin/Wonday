import { connect } from "react-redux";

import Board from "./board";
import { logout } from "../../actions/session_actions";


const mSTP = state => {
    console.log("board container state");
    console.log(state);

    return {
        user: state.entities.user,
        workspace: state.entities.workspace,
        board: state.entities.board
    }
};

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
});


export default connect(mSTP, mDTP)(Board);