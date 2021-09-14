import { connect } from "react-redux";
import { withRouter } from "react-router";

import { getLatestBoard } from "../../../actions/board_actions";
import { viewBoards } from "../../../actions/board_actions";
import { deleteBoard } from "../../../actions/board_actions";
import BoardsList from "./boards_list";


const mSTP = state => ({
    user: state.user,
    boards: state.user.boards
});

const mDTP = dispatch => ({
    getLatestBoard: (boardId, user) => dispatch(getLatestBoard(boardId, user)),
    viewBoards: () => dispatch(viewBoards()),
    deleteBoard: boardId => dispatch(deleteBoard(boardId))
});


export default withRouter(connect(mSTP, mDTP)(BoardsList));