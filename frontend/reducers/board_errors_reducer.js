import { RECEIVE_BOARD_ERRORS, RECEIVE_BOARD } from "../actions/board_actions";


const boardErrorsReducer = (state = [], action) => {

    Object.freeze(state);

    switch (action.type) {

        case RECEIVE_BOARD_ERRORS:
            console.log(action);
            return action.errors;

        case RECEIVE_BOARD:
            return [];

        default:
            return state;

    }

};


export default boardErrorsReducer;