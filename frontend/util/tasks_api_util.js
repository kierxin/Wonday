export const fetchTasks = (groupId) => (
    $.ajax({
        url: `/api/groups/${groupId}/tasks`,
        method: 'GET'
    })
);

export const fetchTask = (taskId) => (
    $.ajax({
        url: `/api/tasks/${taskId}`,
        method: 'GET'
    })
);

export const postTask = (groupId) => (
    $.ajax({
        url: `/api/groups/${groupId}/tasks`,
        method: 'POST'
    })
)

export const updateTask = (task) => (
    $.ajax({
        url: `/api/tasks/${task.id}`,
        method: 'PATCH',
        data: { task: task }
    })
)

export const deleteTask = (taskId) => (
    $.ajax({
        url: `/api/tasks/${taskId}`,
        method: 'DELETE'
    })
);