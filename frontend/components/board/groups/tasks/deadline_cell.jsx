import React from "react";


class DeadlineCell extends React.Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const newDeadline = e.currentTarget.value;
        const task = this.props.task;
        task.deadline = newDeadline;

        this.setState({ selectionMenu: false }, () => {
            this.props.updateTask(task.group_id, task);
        });
    }

    render() {
        const task = this.props.task;
        let thisDeadline;
        let deadlineStatus = "";

        if(task) {
            thisDeadline = this.props.task.deadline;
             if(!thisDeadline) { deadlineStatus = "no-deadline" }
        }

        return (
            <div className={`choose-deadline ${deadlineStatus}`}>
                    <input type="date"
                        value={thisDeadline || "⠀"}
                        onChange={this.handleChange}
                        className={deadlineStatus} />
            </div>
        )
    }

}


export default DeadlineCell;