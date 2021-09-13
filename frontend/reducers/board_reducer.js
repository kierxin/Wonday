import { RECEIVE_BOARD, TOGGLE_MODAL } from "../actions/board_actions";


const boardReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {

        case RECEIVE_BOARD:
            return Object.assign({}, state, action.board);

        case TOGGLE_MODAL:
            return Object.assign({}, state, {
                modal: action.modalType || false
            })

        default:
            return state;

    }
}


export default boardReducer;