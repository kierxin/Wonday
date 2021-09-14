import React from "react";

import TextInputContainer from '../board_main/text_input_container';
import ColorChoice from "./color_choice";
// import ModalContainer from '../../modals/modal_container';


class Group extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            chooseColor: false
        }

        this.toggleColorChange = this.toggleColorChange.bind(this);
        this.changeColor = this.changeColor.bind(this);
        this.deleteGroup = this.deleteGroup.bind(this);
    }

    deleteGroup(e) {
        e.preventDefault();
        this.props.deleteGroup(this.props.group.board_id, this.props.group.id)
    }

    toggleColorChange() {
        this.setState({ chooseColor: !this.state.chooseColor });
    }

    changeColor() {
        e.preventDefault();
        // this.props...
        console.log("choose color");
    }

    render() {
        const group = this.props.group;

        return(
            <li key={`group-${group.id}`}
                className={`${group.color}`}>
                <div className="group-container">
                    <div className="group-over">
                        <div className="group-header">
                            <button className={`${group.color}-btn`}>▼</button>
                            <div className={`group-dropdown`}>

                                <div className="color-change-wrapper"
                                    onMouseEnter={this.toggleColorChange}
                                    onMouseLeave={this.toggleColorChange}>
                                    <button>Change group color</button>
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
                                
                                <button onClick={this.deleteGroup}>
                                    Delete group
                                </button>
                            </div>
                            <TextInputContainer elementType="group" groupId={group.id} elementId={group.id} />
                        </div>
                        
                        {/* for each task, the task's title & options button */}
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