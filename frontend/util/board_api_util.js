export const postBoard = board => (
    $.ajax ({
        url: '/api/boards',
        method: 'POST',
        data: {board: board}
    })
);

export const getBoard = boardId => (
    $.ajax ({
        url: `/api/boards/${boardId}`,
        method: 'GET'
    })
)