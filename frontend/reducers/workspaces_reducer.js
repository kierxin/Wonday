import { RECEIVE_WORKSPACE } from "../actions/workspace_actions";


const workspacesReducer = (state = {}, action) => {

    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch(action.type) {

        case RECEIVE_WORKSPACE:
            nextState[action.workspace.id] = action.workspace;
            return nextState;

        default:
            return state;

    }

}


export default workspacesReducer;