import { RECEIVE_BOARD } from "../actions/board_actions";


const boardsReducer = (state = {}, action) => {

    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {

        case RECEIVE_BOARD:
            // nextState[action.board.id] = action.board;
            return action.board;

        default:
            return state;

    }
}


export default boardsReducer;