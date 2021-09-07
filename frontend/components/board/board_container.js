import { connect } from "react-redux";
import Board from "./board";


const mSTP = state => ({
    user: state.currentUser
});


export default connect(mSTP, null)(Board);