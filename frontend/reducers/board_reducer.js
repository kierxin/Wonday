// import { RECEIVE_BOARD } from "../actions/board_actions";
// import { RECEIVE_USER } from "../actions/session_actions";
import { RECEIVE_BOARD } from "../actions/board_actions";


const boardReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {

        case RECEIVE_BOARD:
            return action.board;

        default:
            return state;

    }
}


export default boardReducer;