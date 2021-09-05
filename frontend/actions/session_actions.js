import { postUser, postSession, deleteSession } from "../util/session_api_util";


export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';


const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser: currentUser
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

const receiveError = errors => ({
    type: RECEIVE_SESSION_ERRORS
});


export const createNewUser = formUser => dispatch => postUser(formUser)
    .then(user => dispatch(receiveCurrentUser(user)),
        errors => dispatch(receiveError(errors.responseJSON))
    );

export const login = formUser => dispatch => postSession(formUser)
    .then(user => dispatch(receiveCurrentUser(user)),
        errors => dispatch(receiveError(errors.responseJSON))
    );

export const logout = () => dispatch => deleteSession()
    .then(() => dispatch(logoutCurrentUser()));