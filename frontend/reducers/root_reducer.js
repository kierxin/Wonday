import { combineReducers } from "redux";

import sessionReducer from "./session_reducer";
import errorsReducer from "./errors_reducer";
import boardReducer from "./board_reducer";
import usersReducer from "./users_reducer";


const rootReducer = combineReducers({
    user: usersReducer,
    board: boardReducer,
    session: sessionReducer,
    errors: errorsReducer
});


export default rootReducer;