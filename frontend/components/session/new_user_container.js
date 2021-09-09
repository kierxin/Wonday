import { connect } from "react-redux";

import NewUser from "./new_user";
import { createNewWorkspace } from "../../actions/workspace_actions";


const mSTP = state => ({
    user: state.entities.users[Object.keys(state.entities.users)[0]],
    workspaces: state.entities.workspaces[Object.keys(state.entities.workspaces)[0]]
})

const mDTP = dispatch => ({
    createWorkspace: userId => dispatch(createNewWorkspace(userId)) 
});


export default connect(mSTP, mDTP)(NewUser);