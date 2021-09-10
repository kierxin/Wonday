import { connect } from "react-redux";

import Board from "./board";
import { logout } from "../../actions/session_actions";


const mSTP = state => {
    const user = state.entities.users[Object.keys(state.entities.users)[0]];

    let board;
    if (!state.entities.boards.length) {
        board = user.boards[Object.keys(user.boards)[0]]
    }

    return {
        user: state.entities.users[Object.keys(state.entities.users)[0]],
        workspace: user.workspace,
        board: state.entities.boards[Object.keys(state.entities.boards)[0]] || board
    }
    
};

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
});


export default connect(mSTP, mDTP)(Board);