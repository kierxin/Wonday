import React from "react";


class UserIcon extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            size: ""
        }

        this.hover = this.hover.bind(this);
    }

    hover() {
        console.log("hovered");
        this.state.size === "large-initials" ? (
            this.setState({ size: "" })
        ) : (
            this.setState({ size: "large-initials" })
        )
    }

    render() {
        const initials = "KP";

        return (
            <div id="user-icon"
                className={`${this.state.size}`}
                onMouseOver={this.hover}
                onMouseLeave={this.hover} >
                {initials}
            </div>
        );
    }
}


export default UserIcon;