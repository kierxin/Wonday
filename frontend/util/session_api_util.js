export const postUser = ({
    $.ajax {
        url: "/api/users",
        method: "POST",
        data: {user: user}
    }
});


export const postSession = ({
    $.ajax {
        url: "/api/session",
        method: "POST",
        data: {user: user}
    }
});


export const deleteSession = ({
    $.ajax {
        url: "/api/session",
        method: "DELETE"
    }
});