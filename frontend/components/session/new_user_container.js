import { connect } from "react-redux";

import NewUser from "./new_user";
import { fetchBoard } from "../../actions/board_actions";
import { createNewWorkspace } from "../../actions/workspace_actions";


const mSTP = state => ({
    user: state.entities.users[Object.keys(state.entities.users)[0]]
})

const mDTP = dispatch => ({
    fetchBoard: boardId => dispatch(fetchBoard(boardId)),
    createWorkspace: userId => dispatch(createNewWorkspace(userId)) 
});


export default connect(mSTP, mDTP)(NewUser);