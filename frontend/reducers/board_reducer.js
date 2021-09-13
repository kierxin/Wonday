import { RECEIVE_BOARD, TOGGLE_MODAL } from "../actions/board_actions";
import { LOGOUT_USER, RECEIVE_USER } from "../actions/session_actions";


const boardReducer = (state = {}, action) => {
    console.log(state);
    console.log(action);
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        // case RECEIVE_USER:
        //     if (!action.user.boards) {
        //         return state;
        //     } else {
        //         return Object.assign({}, action.user.boards[0]);
        //     }

        case RECEIVE_BOARD:
            nextState = Object.assign({}, state, action.board);
            // if (!nextState.modal) { nextState.modal = false };
            return nextState;

        case TOGGLE_MODAL:
            return Object.assign({}, state, {
                modal: Object.assign({}, action.modalType || false)
            })

        case LOGOUT_USER:
            return {};

        default:
            return state;

    }
}


export default boardReducer;