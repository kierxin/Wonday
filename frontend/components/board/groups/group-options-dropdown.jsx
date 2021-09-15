import React from "react";
import ColorChoice from "./color_choice";


const GroupOptionsDropdown = props => {

    return(
        <div onBlur={props.toggleOptions}
            className={`group-dropdown group-dropdown-${props.status}`}>

            <div className="color-change-wrapper"
                onMouseEnter={props.toggleColorChange}
                onMouseLeave={props.toggleColorChange}>
                <button className="group-option">
                    Change group color
                </button>
                <div className="color-choices-wrapper">
                    <div className={`colors-picker colors-picker-${props.chooseColor}`}>
                        <ColorChoice color="gold" changeColor={props.changeColor} />
                        <ColorChoice color="salmon" changeColor={props.changeColor} />
                        <ColorChoice color="green" changeColor={props.changeColor} />
                        <ColorChoice color="blue" changeColor={props.changeColor} />
                        <ColorChoice color="brown" changeColor={props.changeColor} />
                        <ColorChoice color="gray" changeColor={props.changeColor} />
                        <ColorChoice color="indigo" changeColor={props.changeColor} />
                    </div>
                </div>
            </div>

            <button className="group-option"
                onClick={props.deleteGroup}>
                Delete group
            </button>

        </div>
    )
}


export default GroupOptionsDropdown;