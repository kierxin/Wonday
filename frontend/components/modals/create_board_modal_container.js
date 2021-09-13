import { connect } from "react-redux";
import { withRouter } from "react-router";

import CreateBoardModalContent from "./create_board_modal_content";
import { createNewBoard, toggleModal } from "../../actions/board_actions";


const mSTP = state => ({
    user: state.user,
    boardId: state.board.id
});

const mDTP = dispatch => ({
    createNewBoard: board => dispatch(createNewBoard(board)),
    toggleModal: modalType => dispatch(toggleModal(modalType))
});


export default withRouter(connect(mSTP, mDTP)(CreateBoardModalContent));