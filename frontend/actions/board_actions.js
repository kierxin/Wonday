import * as BoardApiUtil from '../util/board_api_util';


export const RECEIVE_BOARD = 'RECEIVE_BOARD';


const receiveBoard = board => ({
    type: RECEIVE_BOARD,
    board: board
});


export const createNewBoard = newBoard => dispatch => (
    BoardApiUtil.postBoard(newBoard)
    .then(board => dispatch(receiveBoard(board)))
    .then(board => BoardApiUtil.getBoard(board.id))
);