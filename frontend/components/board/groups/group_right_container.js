import { connect } from "react-redux";
import { updateTask } from "../../../util/tasks_api_util";
import GroupRight from "./group_right";


const mSTP = (state, ownProps) => {
    const group = state.board.groups.find(group => group.id === ownProps.groupId);

    return {
        columns: state.board.columns_in_use,
        group: group,
        filter: state.board.filter,
        filterType: state.board.filterType
    }
}

const mDTP = dispatch => ({
    updateTask: (groupId, task) => dispatch(updateTask(groupId, task))
});


export default connect(mSTP, mDTP)(GroupRight);