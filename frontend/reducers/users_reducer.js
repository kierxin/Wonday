import { RECEIVE_BOARD } from "../actions/board_actions";
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";

const usersReducer = (state = {}, action) => {
    
    Object.freeze(state);

    switch(action.type) {

        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, action.currentUser);

        case RECEIVE_BOARD:
            const newBoards = {...state.boards, ...action.board};

            return Object.assign({}, state, {
                latest_board: action.board.id,
                boards: newBoards
             });

        case LOGOUT_CURRENT_USER:
            return {};

        default:
            return state;

    }
    
}


export default usersReducer;