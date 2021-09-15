import { connect } from "react-redux";

import { updateGroup, deleteGroup, fetchGroup } from "../../../actions/group_actions";
import { createNewTask, deleteTask, fetchTasks } from "../../../actions/task_actions";
import Group from "./group";


const mSTP = (state, ownProps) => {
    const group = state.board.groups.find(group => group.id === ownProps.id);

    return {
        group: group
    }
}

const mDTP = dispatch => ({
    fetchGroup: groupId => dispatch(fetchGroup(groupId)),
    updateGroup: (boardId, group) => dispatch(updateGroup(boardId, group)),
    deleteGroup: (boardId, groupId) => dispatch(deleteGroup(boardId, groupId)),
    fetchTasks: groupId => dispatch(fetchTasks(groupId)),
    deleteTask: (groupId, taskId) => dispatch(deleteTask(groupId, taskId)),
    createNewTask: (groupId, task) => dispatch(createNewTask(groupId, task))
});


export default connect(mSTP, mDTP)(Group);