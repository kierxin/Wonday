import { connect } from "react-redux";
import { withRouter } from "react-router";

import CreateBoardModalContent from "./create_board_modal_content";
import { createNewBoard, getLatestBoard, switchBoards } from "../../actions/board_actions";
import { defineBoard } from "../../util/board_api_util";


const mSTP = state => ({
    user: state.user,
    board: defineBoard(state.user)
});


const mDTP = dispatch => ({
    createNewBoard: board => dispatch(createNewBoard(board)),
    // switchBoards: boardId => dispatch(switchBoards(boardId)),
    // getLatestBoard: boardId => dispatch(getLatestBoard(boardId))
});


export default withRouter(connect(mSTP, mDTP)(CreateBoardModalContent));