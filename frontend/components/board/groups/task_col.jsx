import React from "react";

import TaskCellsContainer from "./tasks/task_cells_container";


const TaskCol = props => {
    const { colType, task } = props;

    return(
        <>
            {colType === "status" && (
                <TaskCellsContainer.StatusCell task={task} />
            )}

            {colType === "deadline" && (
                <TaskCellsContainer.DeadlineCell task={task} />
            )}

            {colType === "people" && (
                <TaskCellsContainer.PeopleCell task={task} />
            )}
        </>
    )
}


export default TaskCol;