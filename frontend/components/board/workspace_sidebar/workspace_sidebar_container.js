import { connect } from "react-redux";
import { toggleModal } from "../../../actions/board_actions";

import WorkspaceSidebar from "./workspace_sidebar";


const mSTP = (state) => {

    return {
        board: state.board,
        user: state.user
    };
};

const mDTP = dispatch => ({
    toggleModal: modalType => dispatch(toggleModal(modalType))
});


export default connect(mSTP, mDTP)(WorkspaceSidebar);