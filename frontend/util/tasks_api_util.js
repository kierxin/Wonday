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

export const postTask = (groupId, task) => (
    $.ajax({
        url: `/api/groups/${groupId}/tasks`,
        method: 'POST',
        data: { task: task }
    })
);

export const updateTask = (task) => (
    $.ajax({
        url: `/api/tasks/${task.id}`,
        method: 'PATCH',
        data: { task: task }
    })
);

export const deleteTask = (taskId) => (
    $.ajax({
        url: `/api/tasks/${taskId}`,
        method: 'DELETE'
    })
);