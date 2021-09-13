import { RECEIVE_BOARD, TOGGLE_MODAL } from "../actions/board_actions";
import { LOGOUT_USER, RECEIVE_USER } from "../actions/session_actions";


const boardReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    console.log("nEXT STATE");
    console.log(nextState);

    switch (action.type) {
        
        case RECEIVE_BOARD:
            nextState = Object.assign({}, state, action.board);
            if (!nextState.modal) { nextState.modal = false };
            return nextState;

        case TOGGLE_MODAL:
            return Object.assign({}, state, {
                modal: action.modalType || false
            })

        case LOGOUT_USER:
            return {};

        default:
            return state;

    }
}


export default boardReducer;