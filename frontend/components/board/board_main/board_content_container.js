import { connect } from "react-redux";
import { withRouter } from "react-router";

import BoardContent from "./board_content";


const mSTP = state => {
    console.log("BOARD CONTENT STATE");
    console.log(state);
    return {
        user: state.user
    }
}


export default withRouter(connect(mSTP, null)(BoardContent));