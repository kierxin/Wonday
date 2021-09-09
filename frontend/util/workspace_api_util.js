export const postWorkspace = userId => (
    $.ajax({
        url: '/api/workspaces',
        method: 'POST',
        data: { userId: userId }
    })
)