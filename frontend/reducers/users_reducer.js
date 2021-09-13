import { RECEIVE_BOARD, RECEIVE_BOARDS } from "../actions/board_actions";
import { RECEIVE_USER, LOGOUT_USER } from "../actions/session_actions";

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch(action.type) {

        case RECEIVE_USER:
            return Object.assign({}, state, action.user);

        case LOGOUT_USER:
            return {};

        case RECEIVE_BOARDS:
            return Object.assign({}, state, {
                boards: action.boards
            });

        case RECEIVE_BOARD:
            let boards = nextState.boards;

            const replica = {
                id: action.board.id,
                name: action.board.name
            }

            if (boards.findIndex(board => board.id === action.board.id) === -1) {
                boards.push(replica);
            } else {
                const idx = boards.findIndex(board => board.id === action.board.id);

                boards[idx] = replica;
            }
            
            return Object.assign({}, state, {
                latest_board: action.board.id,
                boards: boards,
             });

        default:
            return state;

    }
    
}


export default usersReducer;