export const fetchUser = userId => (
    $.ajax ({
        url: `api/users/${userId}`
    })
)


export const postUser = user => (
    $.ajax ({
        url: '/api/users',
        method: 'POST',
        data: {user: user}
    })
);


export const postSession = user => (
    $.ajax ({
        url: '/api/session',
        method: 'POST',
        data: {user: user}
    })
);


export const updateUser = user => (
    $.ajax({
        url: `/api/users/${user.id}`,
        method: 'GET',
        data: { user: user }
    })
);


export const deleteSession = () => (
    $.ajax ({
        url: '/api/session',
        method: 'DELETE'
    })
);