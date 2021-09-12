import { connect } from "react-redux";

import Board from "./board";
import { logout } from "../../actions/session_actions";
import { switchBoards } from "../../actions/board_actions";
import { getBoard } from "../../util/board_api_util";


const mSTP = state => {
    const boards = state.user.boards;

    console.log(boards);

    return {
        user: state.user
    }
};

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    switchBoards: boardId => dispatch(switchBoards(boardId)),
    getBoard: boardId => dispatch(getBoard(boardId))
});


export default connect(mSTP, mDTP)(Board);