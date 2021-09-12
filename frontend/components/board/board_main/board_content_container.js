import { connect } from "react-redux";
import { withRouter } from "react-router";
import { switchBoards } from "../../../actions/board_actions";

import BoardContent from "./board_content";


const mSTP = state => {
    return {
        user: state.user,
        board: state.board,
    }
}

const mDTP = dispatch => ({
    switchBoards: boardId => dispatch(switchBoards(boardId))
});


export default withRouter(connect(mSTP, mDTP)(BoardContent));