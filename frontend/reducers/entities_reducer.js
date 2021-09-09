import { combineReducers } from "redux";

import users from "./users_reducer";
import boards from "./boards_reducer";
import workspaces from "./workspaces_reducer";


const entitiesReducer = combineReducers({
    users: users,
    boards: boards,
    workspaces: workspaces
})


export default entitiesReducer;