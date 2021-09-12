import { connect } from "react-redux";
import { switchBoards } from "../../../actions/board_actions";

import BoardsList from "./boards_list";


const mSTP = state => ({
    user: state.user
});

const mDTP = dispatch => ({
    switchBoards: boardId => dispatch(switchBoards(boardId))
});


export default connect(mSTP, mDTP)(BoardsList);