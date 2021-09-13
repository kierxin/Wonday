import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getLatestBoard } from "../../../actions/board_actions";
import { fetchGroups } from "../../../actions/group_actions";

import BoardContent from "./board_content";


const mSTP = state => {

    return {
        user: state.user,
        board: state.board
    }
}

const mDTP = dispatch => ({
    getLatestBoard: boardId => dispatch(getLatestBoard(boardId)),
    fetchGroups: boardId => dispatch(fetchGroups(boardId))
});


export default withRouter(connect(mSTP, mDTP)(BoardContent));