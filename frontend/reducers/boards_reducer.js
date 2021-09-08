import { RECEIVE_BOARD } from "../actions/board_actions";

const boardsReducer = (state = {}, action) => {

    Object.freeze(state);

    switch (action.type) {

        case RECEIVE_BOARD:
            return Object.assign({}, state, { [action.board.id]: action.board });

        default:
            return state;

    }

}


export default boardsReducer;