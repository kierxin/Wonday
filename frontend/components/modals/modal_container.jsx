import { connect } from "react-redux";
import { toggleModal } from "../../actions/board_actions";
import Modal from "./modal";


const mSTP = state => ({
    userId: state.user.id,
    workspaceId: state.user.workspace.id,
    modalType: state.board.modal
})

const mDTP = dispatch => ({
    toggleModal: modalType => dispatch(toggleModal(modalType))
})


export default connect(mSTP, mDTP)(Modal);