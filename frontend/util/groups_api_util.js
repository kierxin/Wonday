export const fetchGroups = (boardId) => (
    $.ajax({
        url: `/api/boards/${boardId}/groups}`,
        method: 'GET'
    })
);

export const fetchGroup = (boardId, groupId) => (
    $.ajax({
        url: `/api/boards/${boardId}/groups/${groupId}`,
        method: 'GET'
    })
);

export const postGroup = (boardId) => (
    $.ajax({
        url: `/api/boards/${boardId}/groups`,
        method: 'POST'
    })
)

export const updateGroup = (boardId, group) => (
    $.ajax({
        url: `/api/boards/${boardId}/groups/${group.id}`,
        method: 'PATCH',
        data: { group: group }
    })
)