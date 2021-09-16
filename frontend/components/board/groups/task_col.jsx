import React from "react";


const TaskCol = props => {
    const { colType, task } = props;

    return(
        <div className={`task-col ${colType}-cell`}>
            {`${task[colType]}`}
        </div>
    )
}


export default TaskCol;