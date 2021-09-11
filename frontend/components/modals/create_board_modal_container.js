import { connect } from "react-redux";

import CreateBoardModalContent from "./create_board_modal_content";
import { createNewBoard } from "../../actions/board_actions";


const mSTP = state => {
    console.log("modal container state");
    console.log(state);
    return {
        state: state
    }
}


const mDTP = dispatch => ({
    createNewBoard: board => dispatch(createNewBoard(board))
});


export default connect(mSTP, mDTP)(CreateBoardModalContent);