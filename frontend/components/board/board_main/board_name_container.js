import { connect } from "react-redux";
import { updateBoard } from "../../../actions/board_actions";
import BoardName from "./board_name";


const mSTP = state => ({
    board: state.board
});

// const mDTP = dispatch => {
//     return {
//         updateBoard: board => dispatch(updateBoard(board))
//     };
// };


export default connect(mSTP, null)(BoardName);