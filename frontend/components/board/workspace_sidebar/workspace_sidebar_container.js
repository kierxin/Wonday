import { connect } from "react-redux";

import { switchBoards } from "../../../actions/board_actions";
import WorkspaceSidebar from "./workspace_sidebar";


const mSTP = (state, ownProps) => {
    return {
        board: state.board,
        user: state.user,
        toggleModal: ownProps.toggleModal
    };
};

const mDTP = dispatch => ({
    switchBoards: boardId => dispatch(switchBoards(boardId))
});


export default connect(mSTP, mDTP)(WorkspaceSidebar);