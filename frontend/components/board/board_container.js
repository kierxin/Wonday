import { connect } from "react-redux";

import Board from "./board";


const mSTP = state => ({
    user: state.entities.users[Object.keys(state.entities.users)[0]],
    board: state.entities.users[Object.keys(state.entities.users)[0]].boards[0]
});

export default connect(mSTP, null)(Board);