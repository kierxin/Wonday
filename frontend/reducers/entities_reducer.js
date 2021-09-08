import { combineReducers } from "redux";

import users from "./users_reducer";
import boards from "./boards_reducer";


const entitiesReducer = combineReducers({
    users: users,
    boards: boards
})


export default entitiesReducer;