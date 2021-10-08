import { connect } from "react-redux";

import { updateBoard } from "../../../actions/board_actions";
import ChooseColumns from "./choose_columns";


const mSTP = (state, ownProps) => ({
    choosing: ownProps.choosing,
    board: state.board
})

const mDTP = dispatch => ({
    updateBoard: board => dispatch(updateBoard(board))
})


export default connect(mSTP, mDTP)(ChooseColumns);