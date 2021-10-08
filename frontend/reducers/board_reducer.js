import { RECEIVE_BOARD, TOGGLE_FILTER, TOGGLE_MODAL } from "../actions/board_actions";
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
            if (!nextState.hasOwnProperty("filter")) {
                nextState.filter = false;
            }
            if (!nextState.hasOwnProperty("filterType")) {
                nextState.filterType = false;
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
            let tasksResult = JSON.parse(JSON.stringify(nextState));

            if (action.tasks.justGroupId) {
                const groupIdx = tasksResult.groups.findIndex(
                    group => group.id === action.tasks.justGroupId
                );
                tasksResult.groups[groupIdx].tasks = [];
            } else if (action.tasks && action.tasks.length > 0) {
                const groupId = action.tasks[0].group_id;
                const groupIdx = tasksResult.groups.findIndex(
                    group => group.id === groupId
                );
                tasksResult.groups[groupIdx].tasks = action.tasks;
            } 
            
            return tasksResult;


        case RECEIVE_TASK:
            let taskResult = JSON.parse(JSON.stringify(nextState));

            if(action.task.id) {
                const group = taskResult.groups.find(group => group.id === action.task.group_id);
                const groupIndex = taskResult.groups.findIndex(group => group.id === action.task.group_id);

                if (group.tasks.findIndex(task => task.id === action.task.id) === -1) {
                    taskResult.groups[groupIndex].tasks.push(action.task);
                } else {
                    const index = group.tasks.findIndex(task => task.id === action.task.id);
                    taskResult.groups[groupIndex].tasks[index] = action.task;
                }
            }

            return taskResult;


        case TOGGLE_MODAL:
            const modalType = (' ' + action.modalType).slice(1);

            return Object.assign({}, state, {
                modal: modalType || false
            });


        case TOGGLE_FILTER:
            let filter = (' ' + action.filter).slice(1);
            let filterType = (' ' + action.filterType).slice(1);

            if (filter.length === 1) {
                filter = parseInt(filter);
            } else {
                filter = false;
                filterType = false
            }

            return Object.assign({}, state, {
                filter: filter || false,
                filterType: filterType || false
            });


        // case SET_FILTER_TYPE:
        //     let filterType = (' ' + action.filterType).slice(1);

        //     return Object.assign({}, state, {
        //         filterType: filterType || false
        //     });

        case LOGOUT_USER:
            return {};


        default:
            return state;

    }
}


export default boardReducer;