import { connect } from "react-redux";

import { updateBoard } from "../../../actions/board_actions";
import { updateGroup } from "../../../actions/group_actions";
import { updateTask } from "../../../actions/task_actions";
import TextInput from "../text_input";


const mSTP = (state, ownProps) => {
    const type = ownProps.elementType;

    if (type === "board") {
        return {
            elementType: type,
            parentId: state.board.workspace_id,
            element: state.board
        }
    }

    let group;
    if (type === "group" || type === "task") {
        group = state.board.groups.find(group => group.id === ownProps.groupId);
    }

    if (type === "group") {
        return {
            elementType: type,
            parentId: group.id,
            element: group
        }
    }

    if (type === "task") {
        const task = group.tasks.find(task => task.id === ownProps.elementId);

        return {
            elementType: type,
            parentId: group.id,
            element: task
        }
    }
}

const mDTP = dispatch => ({
    updateBoard: (board) => dispatch(updateBoard(board)),
    updateGroup: (boardId, group) => dispatch(updateGroup(boardId, group)),
    updateTask: (groupId, task) => dispatch(updateTask(groupId, task))
});


export default connect(mSTP, mDTP)(TextInput);