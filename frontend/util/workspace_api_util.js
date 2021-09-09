export const postWorkspace = userId => (
    $.ajax({
        url: '/api/workspaces',
        method: 'POST',
        data: {
            workspace: {
                leaders_ids: [userId]
            }
        }
    })
)