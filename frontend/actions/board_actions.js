import * as BoardApiUtil from '../util/board_api_util';


export const RECEIVE_BOARD = 'RECEIVE_BOARD';


const receiveBoard = board => ({
    type: RECEIVE_BOARD,
    board: board
});


export const createNewBoard = newBoard => dispatch => {
    return(
        BoardApiUtil.postBoard(newBoard)
        .then(result => dispatch(
            receiveBoard(result.boards[result.boards.length - 1])
        ))
    );
};