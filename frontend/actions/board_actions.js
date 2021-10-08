import * as BoardApiUtil from '../util/board_api_util';

export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const RECEIVE_BOARDS = 'RECEIVE_BOARDS';
export const REMOVE_BOARD = 'REMOVE_BOARD';
export const RECEIVE_BOARD_ERRORS = 'RECEIVE_BOARD_ERRORS';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const TOGGLE_FILTER = 'TOGGLE_FILTER';
// export const SET_FILTER_TYPE = 'TOGGLE_FILTER';


const receiveBoard = board => {
    return {
        type: RECEIVE_BOARD,
        board: board
    }
};

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

const receiveFilter = (filter, filterType) => ({
    type: TOGGLE_FILTER,
    filter: filter,
    filterType: filterType
})

// const receiveFilterType = type => ({
//     type: SET_FILTER_TYPE,
//     filterType: type
// })

export const viewBoards = () => dispatch => {
    return(
        BoardApiUtil.getBoards()
        .then(boards => dispatch(
            receiveBoards(boards)
        ))
    );
};

export const getLatestBoard = (boardId, userId) => dispatch => {
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
        .then(action => dispatch(receiveBoard(action.board)))
    );
};

export const updateBoard = board => dispatch => {
    return (
        BoardApiUtil.updateBoard(board)
        .then(board => dispatch(receiveBoard(board)))
    )
}

export const deleteBoard = boardId => dispatch => {
    return(
        BoardApiUtil.deleteBoard(boardId)
        .then(
            boards => dispatch(receiveBoards(boards)),
            error => dispatch(receiveErrors(error.responseJSON))
        )
    )
}

export const toggleModal = modalType => dispatch => {
    return(
        dispatch(modal(modalType))
    );
};

export const toggleFilter = (filter, filterType) => dispatch => {
    return(
        dispatch(receiveFilter(filter, filterType))
    );
}

// export const setFilterType = type => dispatch => {
//     return(
//         dispatch(receiveFilterType(type))
//     )
// }