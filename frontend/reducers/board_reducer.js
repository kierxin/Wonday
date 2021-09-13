import { RECEIVE_BOARD, TOGGLE_MODAL } from "../actions/board_actions";
import { LOGOUT_USER } from "../actions/session_actions";


const boardReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {

        case RECEIVE_BOARD:
            nextState = Object.assign({}, state, action.board);
            return nextState;

        case TOGGLE_MODAL:
            const modalType = (' ' + action.modalType).slice(1)

            return Object.assign({}, state, {
                modal: modalType || false
            })

        case LOGOUT_USER:
            return {};

        default:
            return state;

    }
}


export default boardReducer;