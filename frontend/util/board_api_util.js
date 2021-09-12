export const defineBoard = user => {
    const boards = Object.values(user.boards);
    return boards.filter(board => {
        return board.id === user.latest_board;
    })[0];
};



export const getBoards = () => (
    $.ajax({
        url: '/api/boards',
        method: 'GET'
    })
);
 
export const getBoard = boardId => (
    $.ajax({
        url: `/api/boards/${boardId}`,
        method: 'GET'
    })
);

export const postBoard = board => (
    $.ajax({
        url: '/api/boards',
        method: 'POST',
        data: {board: board}
    })
);

export const updateBoard = board => (
    $.ajax({
        url: `/api/board/${board.id}`,
        method: 'PATCH',
        data: {board: board}
    })
)