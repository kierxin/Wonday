import React from "react";

import Checkbox from "./checkbox";


class SplashUseCase extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: false,
            labelClass: ""
        }

        this.registerClick = this.registerClick.bind(this);
    }

    registerClick(e) {
        this.props.toggleAnimation(e);
        this.setState({ checked: !this.state.checked })

        let classList = this.state.labelClass;

        if (classList.split(" ").includes("checked-label")) {
            this.props.toggleAnimation(e);
            this.setState({ labelClass: "" });
        } else {
            this.props.toggleAnimation(e);
            this.setState({ labelClass: `checked-label` })
        }
    }

    render() {
        return(
            <label 
                datacolor={this.props.color}
                htmlFor={this.props.case}
                onClick={this.registerClick}
                className={this.state.labelClass}>

                <Checkbox 
                    id={this.props.case}
                    color={this.props.color} 
                    checked={this.state.checked} />
                {this.props.innerText}
            </label>
        )
    }
}


export default SplashUseCase;