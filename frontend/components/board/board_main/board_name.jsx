import React from "react";


class BoardName extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const name = (' ' + this.props.board.name).slice(1);
        this.setState({ name: name })
    }

    handleInput(e) {
        this.setState(
            { name: e.currentTarget.value }
        )
    }

    handleSubmit(e) {
        e.preventDefault();

        const oldName = (' ' + this.props.board.name).slice(1);

        if (this.state.name.length < 0) {
            this.setState({ name: oldName });
        } else {
            let board = Object.assign({}, this.props.board);
            board.name = this.state.name;
            this.props.updateBoard(board);
        }
    }

    render() {
        const ignr = "ignore-modal-close";

        return(
            <>
                <form onSubmit={this.handleSubmit}
                    className={`rename-board-modal-foreground ${ignr}`} >

                    <input type="text"
                        defaultValue={this.state.name}
                        onChange={this.handleInput}
                        onBlur={this.handleSubmit} />

                </form>
            </> 
        )
    }

}


export default BoardName;