import { connect } from "react-redux";

import BoardHeader from "./board_header";
import { toggleModal } from "../../../actions/board_actions";


const mSTP = state => ({
    board: state.board
});

const mDTP = dispatch => ({
    toggleModal: modalType => dispatch(toggleModal(modalType)),
});


export default connect(mSTP, mDTP)(BoardHeader);