import { connect } from "react-redux";

import Board from "./board";
import { getCurrentUser, logout } from "../../actions/session_actions";
import { createNewGroup } from "../../actions/group_actions";
import { getLatestBoard } from "../../actions/board_actions";


const mSTP = state => {
    return {
        user: state.user,
        board: state.board
    }
};

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    getLatestBoard: (boardId, userId) => dispatch(getLatestBoard(boardId, userId)),
    createNewGroup: boardId => dispatch(createNewGroup(boardId)),
    getCurrentUser: () => dispatch(getCurrentUser())
});


export default connect(mSTP, mDTP)(Board);