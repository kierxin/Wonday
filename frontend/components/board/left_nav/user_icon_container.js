import { connect } from "react-redux";
import { logout } from "../../../actions/session_actions";
import UserIcon from "./user_icon";


const mSTP = state => ({
    user: state.user
})

const mDTP = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}


export default connect(mSTP, mDTP)(UserIcon);