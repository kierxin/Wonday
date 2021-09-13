import { connect } from "react-redux";

import Board from "./board";
import { logout } from "../../actions/session_actions";
import { getBoard } from "../../util/board_api_util";
import { createNewGroup } from "../../actions/group_actions";
import { getLatestBoard } from "../../actions/board_actions";


const mSTP = state => {
    // const boards = state.user.boards;
    // const board = boards.filter(board => board.id === state.user.latest_board);

    return {
        user: state.user,
        board: state.board || board
    }
};

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    getBoard: boardId => dispatch(getBoard(boardId)),
    createNewGroup: boardId => dispatch(createNewGroup(boardId)),
    getLatestBoard: boardId => dispatch(getLatestBoard)
});


export default connect(mSTP, mDTP)(Board);