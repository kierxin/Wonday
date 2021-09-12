export const getBoard = boardId => (
    $.ajax ({
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