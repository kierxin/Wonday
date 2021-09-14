import { RECEIVE_BOARD, RECEIVE_BOARDS, REMOVE_BOARD } from "../actions/board_actions";
import { RECEIVE_USER, LOGOUT_USER } from "../actions/session_actions";
import { RECEIVE_WORKSPACE } from "../actions/workspace_actions";

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

        case RECEIVE_WORKSPACE:
            return Object.assign({}, state, {
                workspace: action.workspace
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

            boards = boards.filter(board => {
                return board.id
            })
            
            return Object.assign({}, state, {
                latest_board: action.board.id,
                boards: boards
             });

        case REMOVE_BOARD:
            let removeBoards = nextState.boards;
            const idx = removeBoards.findIndex(board => board.id === action.boards.deleted);
            removeBoards.splice(idx, 1)
            nextState.boards = removeBoards;
            return nextState;

        default:
            return state;

    }
    
}


export default usersReducer;