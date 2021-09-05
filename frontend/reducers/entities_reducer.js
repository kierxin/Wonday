import { combineReducers } from "redux";

import users from "./users_reducer";


const entitiesReducer = combineReducers({
    users: users
})


export default entitiesReducer;