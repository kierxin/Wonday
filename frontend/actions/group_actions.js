import * as GroupsApiUtil from '../util/groups_api_util';


export const RECEIVE_GROUP = 'RECEIVE_GROUP';
export const RECEIVE_GROUPS = 'RECEIVE_GROUPS';
export const RECEIVE_GROUP_ERRORS = 'RECEIVE_GROUP_ERRORS';


const receiveGroup = group => ({
    type: RECEIVE_GROUP,
    group: group
});

const receiveGroups = groups => ({
    type: RECEIVE_GROUPS,
    groups: groups
});

const receiveErrors = errors => ({
    type: RECEIVE_GROUP_ERRORS,
    errors: errors
});


export const fetchGroups = boardId => dispatch => {
    return(
        GroupsApiUtil.fetchGroups(boardId)
        .then(groups => dispatch(receiveGroups(groups)))
    );
};

export const fetchGroup = (groupId) => dispatch => {
    return(
        GroupsApiUtil.fetchGroup(groupId)
        .then(group => dispatch(receiveGroup(group)))
    );
};

export const createNewGroup = (boardId) => dispatch => {
    return(
        GroupsApiUtil.postGroup(boardId)
        .then(
            group => dispatch(receiveGroup(group)),
            errors => dispatch(receiveErrors(errors.responseJSON))
        )
        .then(action => dispatch(receiveGroup(action.group)))
    );
};

export const updateGroup = (boardId, group) => dispatch => {
    return (
        GroupsApiUtil.updateGroup(group)
        .then(group => dispatch(receiveGroup(group)))
    );
};

export const deleteGroup = (boardId, groupId) => dispatch => {
    return (
        GroupsApiUtil.deleteGroup(groupId)
            .then(
                groups => dispatch(receiveGroups(groups)),
                error => dispatch(receiveErrors(error.responseJSON))
            )
    )
}