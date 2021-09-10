import React from "react";


class UserIcon extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            size: "",
        }

        this.hover = this.hover.bind(this);
    }

    hover() {
        this.state.size === "large-initials" ? (
            this.setState({ size: "" })
        ) : (
            this.setState({ size: "large-initials" })
        )
    }

    render() {
        let initials = "Me";
        const { name } = this.props; 
        let title;

        if(name) {
            title = name;

            let split = name.split(" ");
            initials =split.map((namePart, i) => {
                if (i === 0 || i === split.length - 1) {
                    return namePart[0].toUpperCase();
                }
            }).join("");
        }

        return (
            <div id="user-icon"
                className={`${this.state.size}`}
                onMouseEnter={this.hover}
                onMouseLeave={this.hover}
                title={title} >
                <p>{initials}</p>
            </div>
        );
    }
}


export default UserIcon;