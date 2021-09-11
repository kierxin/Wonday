export const postWorkspace = workspace => (
    $.ajax({
        url: '/api/workspaces',
        method: 'POST',
        data: { workspace: workspace }
    })
)