import { connect } from "react-redux";

import { updateGroup } from "../../../actions/group_actions";
import TextInput from "../text_input";


const mSTP = (state, ownProps) => {
    const type = ownProps.elementType;
    const group = state.board.groups.find(group => group.id === ownProps.groupId);
    // let task;

    // if (ownProps.type === "task") {
    //     // 
    // }

    if (type === "group") {
        return {
            elementType: type,
            parentId: group.id,
            element: group
        }
    }

    // if (ownProps.type === "task") {
    //     return {

    //     }
    // }

    
}

const mDTP = dispatch => ({
    updateGroup: (boardId, group) => dispatch(updateGroup(boardId, group))
});


export default connect(mSTP, mDTP)(TextInput);