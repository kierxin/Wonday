import { connect } from "react-redux";
import { withRouter } from "react-router";
import { switchBoards } from "../../../actions/board_actions";
import { defineBoard } from "../../../util/board_api_util";

import BoardContent from "./board_content";


const mSTP = state => {
    const board = defineBoard(state.user);

    return {
        user: state.user,
        board: board,
    }
}

const mDTP = dispatch => ({
    switchBoards: boardId => dispatch(switchBoards(boardId))
});


export default withRouter(connect(mSTP, mDTP)(BoardContent));