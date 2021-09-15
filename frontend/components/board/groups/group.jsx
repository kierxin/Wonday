import React from "react";

import TextInputContainer from '../board_main/text_input_container';
import ColorChoice from "./color_choice";


class Group extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            viewOptions: false,
            chooseColor: false
        }

        this.toggleColorChange = this.toggleColorChange.bind(this);
        this.changeColor = this.changeColor.bind(this);
        this.toggleOptions = this.toggleOptions.bind(this);
        this.deleteGroup = this.deleteGroup.bind(this);
    }

    componentDidMount() {
        this.props.fetchTasks(this.props.group.id)
    }

    deleteGroup(e) {
        e.preventDefault();
        this.props.deleteGroup(this.props.group.board_id, this.props.group.id)
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

        return(
            <li key={`group-${group.id}`}
                className={`${group.color}`}>
                <div className="group-container">
                    <div className="group-over">
                        <div className="group-header">

                            <button onClick={this.toggleOptions}
                                className={`group-options-btn ${group.color}-btn`}>▼</button>

                            <div onBlur={this.toggleOptions}
                                className={`group-dropdown group-dropdown-${status}`}>

                                <div className="color-change-wrapper"
                                    onMouseEnter={this.toggleColorChange}
                                    onMouseLeave={this.toggleColorChange}>
                                    <button className="group-option">
                                        Change group color
                                    </button>
                                    <div className="color-choices-wrapper">
                                        <div className={`colors-picker colors-picker-${this.state.chooseColor}`}>
                                            <ColorChoice color="gold" changeColor={this.changeColor} />
                                            <ColorChoice color="salmon" changeColor={this.changeColor} />
                                            <ColorChoice color="green" changeColor={this.changeColor} />
                                            <ColorChoice color="blue" changeColor={this.changeColor} />
                                            <ColorChoice color="brown" changeColor={this.changeColor} />
                                            <ColorChoice color="gray" changeColor={this.changeColor} />
                                            <ColorChoice color="indigo" changeColor={this.changeColor} />
                                        </div>
                                    </div>
                                </div>
                                
                                <button className="group-option" 
                                    onClick={this.deleteGroup}>
                                    Delete group
                                </button>
                                
                            </div>

                            <TextInputContainer elementType="group" groupId={group.id} elementId={group.id} />
                        </div>
                        
                        {/* for each task, the task's title & trashcan button */}
                        <div>{JSON.stringify(group.tasks)}</div>
                    </div>
                    <div className="group-under">
                        {/* header (flexbox of columnTypes) */}
                        {/* for each task, a flexbox that containers each of its columns */}
                    </div>
                </div>
            </li>
        )
    }

}


export default Group;