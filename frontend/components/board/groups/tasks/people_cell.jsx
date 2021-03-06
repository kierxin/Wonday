import React from "react";


class PeopleCell extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectionMenu: false
        }

        this.toggleSelection = this.toggleSelection.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    toggleSelection(e) {
        this.setState({ selectionMenu: !this.state.selectionMenu });
    }

    handleAdd(e) {
        e.preventDefault();
        let task = this.props.task;
        if (!task.people.includes(parseInt(e.currentTarget.getAttribute("datavalue")))) {
            task.people.push(parseInt(e.currentTarget.getAttribute("datavalue")));
        }

        this.setState({ selectionMenu: false }, () => {
            this.props.updateTask(task.group_id, task);
        });
    }

    handleRemove(e) {
        e.preventDefault();
        let task = this.props.task;
        const removeId = e.currentTarget.getAttribute("datavalue");
        const removeIndex = task.people.indexOf(parseInt(removeId));

        task.people.splice(removeIndex, 1);

        this.setState({ selectionMenu: false }, () => {
            this.props.updateTask(task.group_id, task);
        });
    }

    render() {
        const task = this.props.task;
        let thisPeople;

        if (task) {
            thisPeople = this.props.people.map((person, i) => {
                return(
                    <li key={`person-${person.id}-${i}`}>
                        <button 
                            datavalue={person.id} 
                            onClick={this.handleRemove}
                            aria-label={`Unassign ${person.full_name}`}>
                            {person.full_name} ✕
                        </button>
                    </li>
                );
            });
        } 
        
        const boardUsers = this.props.boardUsers.map((user, i) => {
            if(!task.people.includes(user.id)) {
                return (
                    <li key={`user-${user.id}-${i}`}>
                        <button 
                            datavalue={user.id} 
                            onClick={this.handleAdd}
                            aria-label={`Assign ${user.full_name}`}>
                            {user.full_name} +
                        </button>
                    </li>
                )
            }
        });

        const names = this.props.people.map(person => {
            return person.full_name;
        }).join(", ");

        return(
            <div className="cell people-cell-container">
                <button datapeople={names}
                    onClick={this.toggleSelection}
                    className={`task-col people-cell`}
                    aria-label={"View people to assign to task"}>
                    <i className={`fas fa-user-friends ${this.props.color}-people-i`}></i>
                </button>
                {this.state.selectionMenu && (
                    <div className="choose-people-dropdown">
                        <ul id="already-people-list">
                            {thisPeople}
                        </ul>
                        <ul id="potential-people-list">
                            {boardUsers}
                        </ul>
                    </div>
                )}
            </div>
        )
    }

}


export default PeopleCell;