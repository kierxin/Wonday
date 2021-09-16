import { connect } from "react-redux";
import { updateTask } from "../../../../actions/task_actions";

import StatusCell from "./status_cell";
import DeadlineCell from "./deadline_cell";
import PeopleCell from "./people_cell";


const mSTP = (state, ownProps) => {
    let task;
    let people;

    if (ownProps.task) {
        const taskId = ownProps.task.id;
        const groupId = ownProps.task.group_id;
        const groupsIndex = state.board.groups.findIndex(group => group.id === groupId);
        task = state.board.groups[groupsIndex].tasks.find(task => task.id === taskId);

        people = state.board.users.filter(user => task.people.includes(user.id))
    }

    if (!task) { task = {} };

    return {
        task: task,
        people: people,
        boardUsers: state.board.users
    }
}

const mDTP = dispatch => ({
    updateTask: (groupId, task) => dispatch(updateTask(groupId, task))
})


export default {
    StatusCell: connect(mSTP, mDTP)(StatusCell),
    DeadlineCell: connect(mSTP, mDTP)(DeadlineCell),
    PeopleCell: connect(mSTP, mDTP)(PeopleCell)
}