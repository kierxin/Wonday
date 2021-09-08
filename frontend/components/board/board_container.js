import { connect } from "react-redux";

import Board from "./board";
// import { fetchBoard } from "../../util/board_api_util";


const mSTP = state => ({
    user: state.entities.users[Object.keys(state.entities.users)[0]],
    board: state.entities.users[Object.keys(state.entities.users)[0]].boards[0]
});

// const mDTP = dispatch => ({
//     getBoard: boardId => dispatch(fetchBoard(boardId))
// });


export default connect(mSTP, null)(Board);