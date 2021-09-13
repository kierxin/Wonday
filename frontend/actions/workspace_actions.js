import * as WorkspaceApiUtil from '../util/workspace_api_util';
import { createNewBoard } from './board_actions';


export const RECEIVE_WORKSPACE = 'RECEIVE_WORKSPACE';


const receiveWorkspace = workspace => ({
    type: RECEIVE_WORKSPACE,
    workspace: workspace
});

const newBoardParams = (workspace) => {
    return {
    "leaders": [workspace.leaders[0]],
    "workspace_id": workspace.id,
    "name": "New Board"
    }
}


export const createNewWorkspace = userId => dispatch => {
    console.log("CREATE NEW WORKSAPCE");

    const workspace = { leaders: [userId], name: "My Workspace" }

    return(
        WorkspaceApiUtil.postWorkspace(workspace)
        .then(workspace => dispatch(receiveWorkspace(workspace)))
        .then(workspaceAction => newBoardParams(workspaceAction.workspace))
        .then(board => dispatch(createNewBoard(board)))
    );
};