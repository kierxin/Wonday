import { RECEIVE_BOARD } from "../actions/board_actions";
// import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
// import { RECEIVE_WORKSPACE } from "../actions/workspace_actions";


const boardsReducer = (state = {}, action) => {
    debugger;
    Object.freeze(state);

    switch (action.type) {

    //     case RECEIVE_CURRENT_USER:
    //         nextState[user] = action.currentUser;
    //         return nextState;

    //     case RECEIVE_WORKSPACE:
    //         nextState[workspace] = action.workspace;

        case RECEIVE_BOARD:
            return Object.assign({}, state, action.board);

        default:
            return state;

    }
}


export default boardsReducer;