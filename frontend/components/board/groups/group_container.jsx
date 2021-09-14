import { connect } from "react-redux";

import { updateGroup, deleteGroup } from "../../../actions/group_actions";
import Group from "./group";


const mSTP = (state, ownProps) => {
    const group = state.board.groups.find(group => group.id === ownProps.id);

    return {
        group: group
    }
}

const mDTP = dispatch => ({
    updateGroup: (boardId, group) => dispatch(updateGroup(boardId, group)),
    deleteGroup: (boardId, group) => dispatch(deleteGroup(boardId, group))
});


export default connect(mSTP, mDTP)(Group);