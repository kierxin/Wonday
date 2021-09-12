import { connect } from "react-redux";

// import { switchBoards } from "../../../actions/board_actions";
import { defineBoard } from "../../../util/board_api_util";
import WorkspaceSidebar from "./workspace_sidebar";


const mSTP = (state, ownProps) => {
    const board = defineBoard(state.user);

    return {
        board: state.user.board || board,
        user: state.user,
        toggleModal: ownProps.toggleModal
    };
};

// const mDTP = dispatch => ({
//     switchBoards: boardId => dispatch(switchBoards(boardId)),
// });


export default connect(mSTP, null)(WorkspaceSidebar);