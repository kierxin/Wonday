export const fetchBoard = boardId => (
    $.ajax ({
        method: "GET",
        url: `api/boards/${boardId}`
    })
);