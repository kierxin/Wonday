import * as TasksApiUtil from '../util/tasks_api_util';

export const RECEIVE_TASK = 'RECEIVE_TASK';
export const RECEIVE_TASKS = 'RECEIVE_TASKS';
export const RECEIVE_TASK_ERRORS = 'RECEIVE_TASK_ERRORS';


const receiveTask = task => ({
    type: RECEIVE_TASK,
    task: task
});

const receiveTasks = tasks => ({
    type: RECEIVE_TASKS,
    tasks: tasks
});

const receiveErrors = errors => ({
    type: RECEIVE_TASK_ERRORS,
    errors: errors
});


export const fetchTasks = groupId => dispatch => {
    return (
        TasksApiUtil.fetchTasks(groupId)
            .then(tasks => dispatch(receiveTasks(tasks)))
    );
};

export const fetchTask = (groupId, taskId) => dispatch => {
    return (
        TasksApiUtil.fetchTask(taskId)
            .then(task => dispatch(receiveTask(task)))
    );
};

export const createNewTask = (groupId, task) => dispatch => {
    return (
        TasksApiUtil.postTask(groupId, task)
            .then(
                task => dispatch(receiveTask(task)),
                errors => dispatch(receiveErrors(errors.responseJSON))
            )
            .then(action => dispatch(receiveTask(action.task)))
    );
};

export const updateTask = (groupId, task) => dispatch => {
    return (
        TasksApiUtil.updateTask(task)
            .then(task => dispatch(receiveTask(task)))
    );
};

export const deleteTask = (groupId, taskId) => dispatch => {
    return (
        TasksApiUtil.deleteTask(taskId)
            .then(
                tasks => dispatch(receiveTasks(tasks)),
                error => dispatch(receiveErrors(error.responseJSON))
            )
    )
}