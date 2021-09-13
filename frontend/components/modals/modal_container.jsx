import { connect } from "react-redux";
import { toggleModal } from "../../actions/board_actions";
import Modal from "./modal";


const mSTP = state => ({
    modalType: state.board.modal
})

const mDTP = dispatch => ({
    toggleModal: modalType => dispatch(toggleModal(modalType))
})


export default connect(mSTP, mDTP)(Modal);