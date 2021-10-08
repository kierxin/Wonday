import { connect } from "react-redux";

import BoardBar from './board_bar';
import { toggleFilter } from "../../../actions/board_actions";


const mSTP = state => ({
    people: state.board.users
})

const mDTP = dispatch => ({
    toggleFilter: (filter, type) => dispatch(toggleFilter(filter, type))
    // setFilterType: filterType => dispatch(setFilterType(filterType))
})


export default connect(mSTP, mDTP)(BoardBar);