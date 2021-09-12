import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getLatestBoard } from "../../../actions/board_actions";
import { defineBoard } from "../../../util/board_api_util";

import BoardContent from "./board_content";


const mSTP = state => {
    const board = defineBoard(state.user);

    return {
        user: state.user,
        board: state.user.board || board
    }
}

const mDTP = dispatch => ({
    getLatestBoard: boardId => dispatch(getLatestBoard(boardId))
});


export default withRouter(connect(mSTP, mDTP)(BoardContent));