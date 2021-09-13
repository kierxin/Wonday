import { connect } from "react-redux";

import Board from "./board";
import { logout } from "../../actions/session_actions";
import { getBoard, defineBoard } from "../../util/board_api_util";
import { createNewGroup } from "../../actions/group_actions";


const mSTP = state => {
    const board = defineBoard(state.user);
    return {
        user: state.user,
        board: state.board || board
    }
};

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    getBoard: boardId => dispatch(getBoard(boardId)),
    createNewGroup: boardId => dispatch(createNewGroup(boardId))
});


export default connect(mSTP, mDTP)(Board);