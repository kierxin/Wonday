export const fetchGroups = (boardId) => (
    $.ajax({
        url: `/api/boards/${boardId}/groups}`,
        method: 'GET'
    })
);

export const fetchGroup = (groupId) => (
    $.ajax({
        url: `/api/groups/${groupId}`,
        method: 'GET'
    })
);

export const postGroup = (boardId) => (
    $.ajax({
        url: `/api/boards/${boardId}/groups`,
        method: 'POST'
    })
)

export const updateGroup = (group) => (
    $.ajax({
        url: `/api/groups/${group.id}`,
        method: 'PATCH',
        data: { group: group }
    })
)

export const deleteGroup = (groupId) => (
    $.ajax({
        url: `/api/groups/${groupId}`,
        method: 'DELETE'
    })
);