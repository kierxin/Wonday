import * as BoardApiUtil from '../util/board_api_util';


export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const RECEIVE_BOARDS = 'RECEIVE_BOARDS';


const receiveBoard = board => ({
    type: RECEIVE_BOARD,
    board: board
});

const receiveBoards = boards => ({
    type: RECEIVE_BOARDS,
    boards: boards
});


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
        .then(board => dispatch(
            receiveBoard(board)
        ))
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