import { connect } from "react-redux";
import { withRouter } from "react-router";

import { switchBoards } from "../../../actions/board_actions";
import { viewBoards } from "../../../actions/board_actions";
import BoardsList from "./boards_list";


const mSTP = state => ({
    user: state.user,
    boards: state.user.boards
});

const mDTP = dispatch => ({
    switchBoards: boardId => dispatch(switchBoards(boardId)),
    viewBoards: () => dispatch(viewBoards())
});


export default withRouter(connect(mSTP, mDTP)(BoardsList));