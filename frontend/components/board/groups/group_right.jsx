import React from "react";
import TaskCol from "./task_col";

class GroupRight extends React.Component {

    render() {
        let tasks = this.props.group.tasks;
        const group = this.props.group;

        if (this.props.filter) {
            tasks = group.tasks.filter(task => task.people.includes(this.props.filter));
        } else {
            tasks = group.tasks;
        }

        const columns = this.props.columns.map((col, i) => {
            return <h2 key={`col-${i}`}>{col}</h2>
        });

        
        const tasksTable = tasks.map(task => {
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


