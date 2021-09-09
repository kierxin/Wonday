import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
// import { RECEIVE_BOARD } from "../actions/board_actions";


const usersReducer = (state = {}, action) => {

    Object.freeze(state);

    switch(action.type) {

        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });

        // case RECEIVE_BOARD:
        //     console.log(state);

        //     // if (action.board.leaders.includes())

        default:
            return state;

    }
    
}


export default usersReducer;