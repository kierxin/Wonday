import { connect } from "react-redux";

import CreateBoardModalContent from "./create_board_modal_content";
import { createNewBoard } from "../../actions/board_actions";


const mSTP = state => ({
    state: state
});


const mDTP = dispatch => ({
    createNewBoard: board => dispatch(createNewBoard(board))
});


export default connect(mSTP, mDTP)(CreateBoardModalContent);