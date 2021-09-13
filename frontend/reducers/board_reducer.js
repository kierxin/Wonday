import { RECEIVE_BOARD, REMOVE_BOARD, TOGGLE_MODAL } from "../actions/board_actions";
import { RECEIVE_GROUP, RECEIVE_GROUPS } from "../actions/group_actions";
import { LOGOUT_USER } from "../actions/session_actions";


const boardReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_BOARD:
            nextState = Object.assign({}, action.board);
            if (!nextState.hasOwnProperty("modal")) {
                nextState.modal = false;
            }

            return nextState;

        case REMOVE_BOARD:
            if (action.boards.deleted === nextState.id) {
                return action.boards.boards[0];
            }

        case RECEIVE_GROUPS:
            return Object.assign({}, state, {
                groups: action.groups
            });

        case RECEIVE_GROUP:
            let groups = nextState.groups;

            if (groups.findIndex(group => group.id === action.group.id) === -1) { 
                groups.push(action.group);
            } else {
                const idx = groups.findIndex(group => group.id === action.group.id);

                groups[idx] = action.group;
            }

        case TOGGLE_MODAL:
            const modalType = (' ' + action.modalType).slice(1)

            return Object.assign({}, state, {
                modal: modalType || false
            });

        case LOGOUT_USER:
            return {};

        default:
            return state;

    }
}


export default boardReducer;