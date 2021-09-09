import { RECEIVE_BOARD } from "../actions/board_actions";


const boardsReducer = (state = {}, action) => {

    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {

        case RECEIVE_BOARD:
            nextState[action.type.id] = action.type;
            return nextState;

        default:
            return state;

    }
}


export default boardsReducer;