import React from "react";

import TextInputContainer from '../board_main/text_input_container';
import GroupOptionsDropdown from "./group-options-dropdown";
import GroupRightContainer from "./group_right_container";


class Group extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            group: this.props.group,
            viewOptions: false,
            chooseColor: false,
            addNewTaskTitle: "Add a new task"
        }

        this.deleteGroup = this.deleteGroup.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.changeNewTaskTitle = this.changeNewTaskTitle.bind(this);
        this.addTask = this.addTask.bind(this);
        this.toggleColorChange = this.toggleColorChange.bind(this);
        this.changeColor = this.changeColor.bind(this);
        this.toggleOptions = this.toggleOptions.bind(this);
    }

    componentDidMount() {
        this.props.fetchTasks(this.props.group.id);
    }

    deleteGroup(e) {
        e.preventDefault();
        this.props.deleteGroup(this.props.group.board_id, this.props.group.id);
    }

    deleteTask(e) {
        e.preventDefault();
        this.props.deleteTask(this.props.group.id, e.currentTarget.getAttribute("datavalue"));
    }

    changeNewTaskTitle(e) {
        this.setState({ addNewTaskTitle: e.currentTarget.value });
    }

    addTask(e) {
        e.preventDefault();
        const task = {
            title: this.state.addNewTaskTitle,
            group_id: this.props.group.id
        };

        this.setState({ addNewTaskTitle: "Add a new task" }, () => {
            this.props.createNewTask(this.props.group.id, task)
        });
    }

    toggleOptions(e) {
        e.preventDefault();
        this.setState({ viewOptions: !this.state.viewOptions });
    }

    toggleColorChange() {
        this.setState({ chooseColor: !this.state.chooseColor });
    }

    changeColor(e) {
        e.preventDefault();
        let updatedGroup = this.props.group;
        updatedGroup.color = e.currentTarget.value;
        this.props.updateGroup(updatedGroup.board_id, updatedGroup);
    }

    render() {
        const group = this.props.group;
        const status = this.state.viewOptions;

        // titles of group's tasks (text-input), & trashcan to delete them
        const tasks = group.tasks.map(task => {
            return(
                <div className="task-title-container" key={`task-${task.id}`}>
                    <i datavalue={task.id}
                        onClick={this.deleteTask}
                        className={`far fa-trash-alt ignore-fetch i-${group.color}`}></i>

                    <TextInputContainer elementType="task" groupId={group.id} elementId={task.id} />
                </div>
            )
        });


        return(
            <li key={`group-${group.id}`}
                className={`${group.color}`}>
                <div className="group-container">


                    {/* UPPER */}
                    <div className="group-upper">
                        
                        {/* LEFT SIDE */}
                        <div className="group-left">
                            <div className="group-header">

                                {/* toggle GroupOptionsDropdown visibility */}
                                <button onClick={this.toggleOptions}
                                    className={`group-options-btn ${group.color}-btn`}>▼</button>

                                {/* group settings (color, delete) */}
                                <GroupOptionsDropdown
                                    toggleOptions={this.toggleOptions}
                                    toggleColorChange={this.toggleColorChange}
                                    chooseColor={this.state.chooseColor}
                                    changeColor={this.changeColor}
                                    deleteGroup={this.deleteGroup}
                                    status={status} />

                                {/* group's title */}
                                <TextInputContainer 
                                    elementType="group" 
                                    groupId={group.id} 
                                    elementId={group.id} />
                            </div>

                            {/* titles of group's tasks */}
                            <div className="tasks-list">{tasks}</div>
                        </div>

                        {/* RIGHT SIDE */}
                        <GroupRightContainer groupId={group.id} />
                    </div>
                    

                    {/* LOWER */}
                        {/* add task */}
                        <div className="add-task-container group-lower">
                            <div className={`add-color add-color-${group.color}`}></div>
                            <form onSubmit={this.addTask}>
                                <input type="text"
                                    className="add-task-input"
                                    placeholder={`+ ${this.state.addNewTaskTitle}`}
                                    onChange={this.changeNewTaskTitle} />

                                <button>Add</button>
                            </form>
                        </div>
                    

                </div>
            </li>
        )
    }

}


export default Group;