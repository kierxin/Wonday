import React from "react";


class BoardName extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "Board Name"
        }

        this.handleInput = this.handleInput.bind(this);
    }

    componentDidMount() {
        const name = (' ' + this.props.board.name).slice(1);
        this.setState({ name: name })
    }

    handleInput() {

    }

    render() {
        // console.log(this.props.board["name"]);
        // console.log(this.props.name);

        return(
            <input type="text" 
                value={this.state.name}
                onChange={this.handleInput} />
        )
    }

}


export default BoardName;