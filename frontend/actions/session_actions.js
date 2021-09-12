import * as SessionApiUtil from "../util/session_api_util";
import { createNewWorkspace } from "./workspace_actions";


export const RECEIVE_USER = 'RECEIVE_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';


const receiveUser = user => ({
    type: RECEIVE_USER,
    user: user
});

const logoutUser = () => ({
    type: LOGOUT_USER
});

const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors: errors
});


export const createNewUser = formUser => dispatch => {
    return (
        SessionApiUtil.postUser(formUser)
        .then(
            user => dispatch(receiveUser(user)),
            errors => dispatch(receiveErrors(errors.responseJSON))
        )
        .then(
            actionResult => dispatch(
                createNewWorkspace(actionResult.user.id)
            )
        )
    );
};

export const updateExistingUser = user => dispatch => {
    return (
        SessionApiUtil.updateUser(user)
        .then(
            user => dispatch(receiveUser(user)),
            errors => dispatch(receiveErrors(errors.responseJSON))
        )
    )
}

export const login = formUser => dispatch => {
    return (
        SessionApiUtil.postSession(formUser)
        .then(
            user => dispatch(receiveUser(user)),
            errors => dispatch(receiveErrors(errors.responseJSON))
        )
    );
}

export const logout = () => dispatch => (
    SessionApiUtil.deleteSession()
    .then(
        () => dispatch(logoutUser())
    )
);