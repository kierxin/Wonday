import * as SessionApiUtil from "../util/session_api_util";
import { createNewWorkspace } from "./workspace_actions";


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

const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors: errors
});


export const createNewUser = formUser => dispatch => (
    SessionApiUtil.postUser(formUser)
    .then(
        user => dispatch(receiveCurrentUser(user)),
        errors => dispatch(receiveErrors(errors.responseJSON))
    )
    .then(user => dispatch(createNewWorkspace(user.id)))
);

export const login = formUser => dispatch => (
    SessionApiUtil.postSession(formUser)
    .then(
        user => dispatch(receiveCurrentUser(user)),
        errors => dispatch(receiveErrors(errors.responseJSON))
    )
);

export const logout = () => dispatch => (
    SessionApiUtil.deleteSession()
    .then(
        () => dispatch(logoutCurrentUser())
    )
);