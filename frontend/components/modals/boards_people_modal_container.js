import { connect } from "react-redux";

import BoardsPeopleModal from "./boards_people_modal";
import { toggleModal } from "../../actions/board_actions";


const mSTP = state => ({
    people: state.board.users
});

const mDTP = dispatch => ({
    toggleModal: modalType => dispatch(toggleModal(modalType))
});


export default connect(mSTP, mDTP)(BoardsPeopleModal);