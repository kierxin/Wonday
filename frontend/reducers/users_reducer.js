// import { RECEIVE_GROUP, RECEIVE_GROUPS } from "../actions/group_actions";
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
            let alreadyIncluded = false;

            boards.forEach(board => {
                if(board.id === action.board.id) {alreadyIncluded = true}
            })

            if(!alreadyIncluded) {
                boards.push(action.board);
            }
            
            return Object.assign({}, state, {
                latest_board: action.board.id,
                boards: boards,
                board: action.board
             });

        // case RECEIVE_GROUPS:
        //     return Object.assign({}, state, {
        //         boards: Object.assign({}, {
        //             groups: action.groups
        //         })
        //     });

        // case RECEIVE_GROUP:
        //     let boardId = nextState.latest_board;


        default:
            return state;

    }
    
}


export default usersReducer;