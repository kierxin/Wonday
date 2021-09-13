import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getLatestBoard } from "../../../actions/board_actions";
import { fetchUser } from "../../../actions/session_actions";

import BoardContent from "./board_content";


const mSTP = state => {

    return {
        user: state.user,
        board: state.board
    }
}

const mDTP = dispatch => ({
    getLatestBoard: boardId => dispatch(getLatestBoard(boardId)),
    fetchUser: userId => dispatch(fetchUser(userId))
});


export default withRouter(connect(mSTP, mDTP)(BoardContent));