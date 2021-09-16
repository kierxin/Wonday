import { connect } from "react-redux";
import { updateTask } from "../../../../actions/task_actions";

import StatusCell from "./status_cell";


const mSTP = (state, ownProps) => {
    let task;

    if (ownProps.task) {
        const taskId = ownProps.task.id;
        const groupId = ownProps.task.group_id;
        const groupsIndex = state.board.groups.findIndex(group => group.id === groupId);
        task = state.board.groups[groupsIndex].tasks.find(task => task.id === taskId);
    }

    if (!task) { task = {} };

    return {
        task: task
    }
}

const mDTP = dispatch => ({
    updateTask: (groupId, task) => dispatch(updateTask(groupId, task))
})


export default connect(mSTP, mDTP)(StatusCell)