import { combineReducers } from "redux";

import boardErrorsReducer from "./board_errors_reducer";
import groupErrorsReducer from "./group_errors_reducer";
import sessionErrorsReducer from "./session_errors_reducer";
import taskErrorsReducer from "./task_errors_reducer";


const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    board: boardErrorsReducer,
    group: groupErrorsReducer,
    task: taskErrorsReducer
});


export default errorsReducer;