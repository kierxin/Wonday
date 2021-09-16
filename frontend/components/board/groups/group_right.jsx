import React from "react";
import TaskCol from "./task_col";

class GroupRight extends React.Component {

    render() {
        const columns = this.props.columns.map((col, i) => {
            return <h2 key={`col-${i}`}>{col}</h2>
        });

        
        const tasksTable = this.props.group.tasks.map(task => {
            return(
                <div key={`task-row-${task.id}`} className="task-row">
                    {this.props.columns.map(col => {
                        return(
                            <TaskCol colType={col}
                                task={task}
                                key={`${col}-${task.id}`} />
                        );
                    })}
                </div>
            );
        });

        return(
            <div className="group-right">
                <div className="group-right-header">
                    {columns}
                </div>
                <div className="group-right-main">
                    {tasksTable}
                </div>
            </div>
        )
    }

}


export default GroupRight;


