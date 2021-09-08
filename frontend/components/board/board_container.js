import { connect } from "react-redux";

import Board from "./board";
import { fetchBoard } from "../../util/board_api_util";


const mSTP = state => ({
    board: state.board
});

const mDTP = dispatch => ({
    getBoard: boardId => dispatch(fetchBoard(boardId))
});

console.log("hit container");

export default connect(mSTP, mDTP)(Board);