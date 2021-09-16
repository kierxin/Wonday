import React from "react";


class StatusCell extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectionMenu: false
        }

        this.toggleSelection = this.toggleSelection.bind(this);
        this.handleChoice = this.handleChoice.bind(this);
    }

    toggleSelection() {
        this.setState({ selectionMenu: !this.state.selectionMenu });
    }

    handleChoice(e) {
        e.preventDefault();
        let task = this.props.task;
        console.log(task);
        task.status = e.currentTarget.getAttribute("datavalue");
        
        this.setState({ selectionMenu: false }, () => {
            this.props.updateTask(task.group_id, task);
        });
    }

    render() {
        const task = this.props.task;
        let thisStatus;

        if (task) {
            thisStatus = this.props.task.status;
        }

        let status;

        if (thisStatus === "Done") {
            status = "done";
        } else if (thisStatus === "Working on it") {
            status = "doing";
        } else if (thisStatus === "Stuck") {
            status = "stuck";
        } else {
            status = "unknown"
        }

        return(
            <div className="status-cell-container cell">
                <button onClick={this.toggleSelection}
                    className={`task-col status-cell ${status}-status-cell`}>
                    {thisStatus}
                </button>
                
                {this.state.selectionMenu && (
                    <ul className="status-menu">
                        <li onClick={this.handleChoice}
                            datavalue="Done">Done</li>

                        <li onClick={this.handleChoice}
                            datavalue="Working on it">Working on it</li>

                        <li onClick={this.handleChoice}
                            datavalue="Stuck">Stuck</li>

                        <li onClick={this.handleChoice}
                            datavalue="">⠀</li>
                    </ul>
                )}
            </div>
        )
    }

}


export default StatusCell;