import React from "react";

import TaskCol from "./task_col";
import ChooseColumnsContainer from "./choose_columns_container";


class GroupRight extends React.Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
            choosingCols: false
        }

        this.toggleColumnChoosing = this.toggleColumnChoosing.bind(this);
    }

    toggleColumnChoosing(e) {
        e.preventDefault();
        this.setState({ choosingCols: !this.state.choosingCols });
    }

    render() {
        let tasks = this.props.group.tasks;
        const group = this.props.group;
        const filter = this.props.filter;

        if (filter) {
            if (filter === "true" && this.props.filterType === "search") {
                tasks = group.tasks;
            } else {
                tasks = group.tasks.filter(task => {
                    return task.people.includes(filter) || (
                        task.title.toLowerCase().includes(filter.toLowerCase())
                    ) || (
                            task.status && task.status.toLowerCase().includes(filter.toLowerCase())
                    );
                });
            }
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
                    <div className="end-of-task-row"></div>
                </div>
            );
        });

        return(
            <div className="group-right">
                <div className="group-right-header">
                    {columns}
                    <div className="toggle-choose-column"
                        onClick={this.toggleColumnChoosing}>
                        <i className="far fa-check-circle"></i>
                    </div>

                    {this.state.choosingCols && (
                        <ChooseColumnsContainer
                            choosing={this.state.choosingCols}
                            toggleChoosing={this.toggleColumnChoosing} />
                    )}
                </div>
                <div className="group-right-main">
                    {tasksTable}
                </div>
            </div>
        )
    }

}


export default GroupRight;


