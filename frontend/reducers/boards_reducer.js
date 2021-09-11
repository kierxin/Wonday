import { RECEIVE_BOARD } from "../actions/board_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
// import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
// import { RECEIVE_WORKSPACE } from "../actions/workspace_actions";


const boardsReducer = (state = {}, action) => {
    console.log(action);
    Object.freeze(state);

    switch (action.type) {

        case RECEIVE_CURRENT_USER:
            return action.currentUser.latestBoard || action.currentUser.boards[0];

        case RECEIVE_BOARD:
            return action.board;

        default:
            return state;

    }
}


export default boardsReducer;