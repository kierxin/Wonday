import * as BoardApiUtil from '../util/board_api_util';
// import { createNewGroup } from './group_actions';


export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const RECEIVE_BOARDS = 'RECEIVE_BOARDS';
export const RECEIVE_BOARD_ERRORS = 'RECEIVE_BOARD_ERRORS';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';


const receiveBoard = board => ({
    type: RECEIVE_BOARD,
    board: board
});

const receiveBoards = boards => ({
    type: RECEIVE_BOARDS,
    boards: boards
});

const receiveErrors = errors => ({
    type: RECEIVE_BOARD_ERRORS,
    errors: errors
});

const modal = modalType => ({
    type: TOGGLE_MODAL,
    modalType: modalType
})


// const newGroupParams = (board) => {
//     const colors = ["gold", "indigo", "green", "blue", "brown", "gray", "salmon"]
//     const index = Math.floor(Math.random() * 7);

//     return [board.id, {
//         "title": "New Group",
//         "board_id": board.id,
//         "color": colors[index]
//     }]
// }


export const viewBoards = () => dispatch => {
    return(
        BoardApiUtil.getBoards()
        .then(boards => dispatch(
            receiveBoards(boards)
        ))
    );
};

export const getLatestBoard = boardId => dispatch => {
    return(
        BoardApiUtil.getBoard(boardId)
        .then(
            board => dispatch(receiveBoard(board))
        )
    );
};

export const createNewBoard = newBoard => dispatch => {
    return(
        BoardApiUtil.postBoard(newBoard)
        .then(
            board => dispatch(receiveBoard(board)),
            errors => dispatch(receiveErrors(errors.responseJSON))
        )
        // .then(action => BoardApiUtil.getBoard(action.board.id))
        // .then(action => getLatestBoard(action.board.id))
        .then(board => dispatch(receiveBoard(board)))
        // .then(action => newGroupParams(action.board))
        // .then(group => dispatch(createNewGroup(group[0], group[1])))
    );
};

export const updateBoard = board => dispatch => {
    return(
        BoardApiUtil.updateBoard(board)
        .then(board => dispatch(receiveBoard(board)))
    )
}

export const switchBoards = boardId => dispatch => {
    return(
        BoardApiUtil.getBoard(boardId)
        .then(board => dispatch(
            receiveBoard(board)
        ))
    );
};

export const toggleModal = modalType => dispatch => {
    return(
        dispatch(modal(modalType))
    );
};