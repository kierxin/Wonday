import { connect } from "react-redux";

import Board from "./board";
import { logout } from "../../actions/session_actions";
import { switchBoards } from "../../actions/board_actions";


const mSTP = state => {

    return {
        user: state.user,
        board: state.board
    }
};

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    switchBoards: boardId => dispatch(switchBoards(boardId))
});


export default connect(mSTP, mDTP)(Board);