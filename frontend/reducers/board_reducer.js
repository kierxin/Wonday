import { RECEIVE_BOARD, TOGGLE_MODAL } from "../actions/board_actions";
import { LOGOUT_USER, RECEIVE_USER } from "../actions/session_actions";


const boardReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    console.log("ACTION");
    console.log(action);

    // debugger;

    switch (action.type) {
        // case RECEIVE_USER:
        //     console.log(action);
        //     if (!action.user.boards) {
        //         return state;
        //     } else {
        //         return Object.assign({}, action.user.boards[0]);
        //     }

        case RECEIVE_BOARD:
            // console.log(action);
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