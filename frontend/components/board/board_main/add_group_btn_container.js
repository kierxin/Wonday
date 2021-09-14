import { connect } from "react-redux";
import { createNewGroup } from "../../../actions/group_actions";

import AddGroupBtn from "./add_group_btn";

const mSTP = state => ({
    boardId: state.board.id
});

const mDTP = dispatch => ({
    createNewGroup: (boardId) => dispatch(createNewGroup(boardId))
});


export default connect(mSTP, mDTP)(AddGroupBtn);