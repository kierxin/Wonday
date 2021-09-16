import React from "react";

import StatusCellContainer from "./tasks/status_cell_container";


const TaskCol = props => {
    const { colType, task } = props;

    return(
        <>
            {colType === "status" && (
                <StatusCellContainer task={task} />
            )}

            {colType === "due_date" && (
                // <DeadlineCellContainer task={task} />
                <div>deadline</div>
            )}

            {colType === "person" && (
                // <PersonCellContainer task={task} />
                <div>person</div>
            )}
        </>

        // <div className={`task-col ${colType}-cell`}>
        //     {`${task[colType]}`}
        // </div>
    )
}


export default TaskCol;