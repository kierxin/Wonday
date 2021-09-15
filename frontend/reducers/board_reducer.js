import { RECEIVE_BOARD, TOGGLE_MODAL } from "../actions/board_actions";
import { RECEIVE_GROUP, RECEIVE_GROUPS } from "../actions/group_actions";
import { RECEIVE_TASK, RECEIVE_TASKS } from "../actions/task_actions";
import { LOGOUT_USER } from "../actions/session_actions";


const boardReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {

        case RECEIVE_BOARD:
            nextState = Object.assign({}, state, action.board);
            if (!nextState.hasOwnProperty("modal")) {
                nextState.modal = false;
            }

            return nextState;

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

            return Object.assign({}, state, {
                groups: groups
            });



        case RECEIVE_TASKS:
            if(action.tasks.length) {
                const groupId = action.tasks[0].group_id;
                const groupIdx = nextState.groups.findIndex(group => group.id === groupId);

                nextState.groups[groupIdx].tasks = action.tasks;
            }
            
            return nextState;


        case RECEIVE_TASK:
            const groupID = action.task.group_id;
            const groupIndex = nextState.groups.indexOf(group => group.id === groupID);
            const group = nextState.groups[groupIndex]

            if(group.tasks.findIndex(task => task.id === action.task.id) === -1) {
                nextState.groups[groupIndex].tasks.push(action.task);
            } else {
                const index = group.tasks.findIndex(task => task.id === action.task.id);
                nextState.groups[groupIndex].tasks[index] = action.task;
            }
            return nextState;


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