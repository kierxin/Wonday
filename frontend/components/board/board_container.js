import { connect } from "react-redux";

import Board from "./board";
import { logout } from "../../actions/session_actions";
import { switchBoards } from "../../actions/board_actions";
import { getBoard, defineBoard } from "../../util/board_api_util";


const mSTP = state => {
    const board = defineBoard(state.user);
    return {
        user: state.user,
        board: board
    }
};

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    // switchBoards: boardId => dispatch(switchBoards(boardId)),
    getBoard: boardId => dispatch(getBoard(boardId))
});


export default connect(mSTP, mDTP)(Board);