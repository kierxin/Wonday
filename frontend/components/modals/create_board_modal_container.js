import { connect } from "react-redux";

import CreateBoardModalContent from "./create_board_modal_content";
import { createNewBoard } from "../../actions/board_actions";
import { defineBoard } from "../../util/board_api_util";


const mSTP = state => ({
    user: state.user,
    board: defineBoard(state.user)
});


const mDTP = dispatch => ({
    createNewBoard: board => dispatch(createNewBoard(board))
});


export default connect(mSTP, mDTP)(CreateBoardModalContent);