import { connect } from "react-redux";
import { toggleModal, updateBoard } from "../../../actions/board_actions";
import BoardName from "./board_name";


const mSTP = state => ({
    board: state.board
});

const mDTP = dispatch => {
    return {
        updateBoard: board => dispatch(updateBoard(board)),
        toggleModal: modalType => dispatch(toggleModal(modalType))
    };
};


export default connect(mSTP, mDTP)(BoardName);