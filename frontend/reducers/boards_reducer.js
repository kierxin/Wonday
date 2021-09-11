// import { RECEIVE_BOARD } from "../actions/board_actions";
// import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
// // import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
// // import { RECEIVE_WORKSPACE } from "../actions/workspace_actions";


// const boardsReducer = (state = {}, action) => {
//     console.log(action);
//     Object.freeze(state);

//     switch (action.type) {

//         case RECEIVE_CURRENT_USER:
//             // if (action.currentUser.boards.length) {
//                 return Object.assign({}, state, action.currentUser.latest_board);
//             // } else {
//                 // return {};
//             // }

//         case RECEIVE_BOARD:
//             return Object.assign({}, state, action.board);

//         default:
//             return state;

//     }
// }


// export default boardsReducer;