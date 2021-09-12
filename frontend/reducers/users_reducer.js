import { RECEIVE_BOARD, RECEIVE_BOARDS } from "../actions/board_actions";
import { RECEIVE_USER, LOGOUT_USER } from "../actions/session_actions";

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch(action.type) {

        case RECEIVE_USER:
            return Object.assign({}, state, action.user);

        case RECEIVE_BOARDS:
            return Object.assign({}, state, {
                boards: boards
            });

        case RECEIVE_BOARD:
            const newBoards = {...state.boards, ...action.board};

            return Object.assign({}, state, {
                latest_board: action.board.id,
                boards: newBoards
             });

        case LOGOUT_USER:
            return {};

        default:
            return state;

    }
    
}


export default usersReducer;