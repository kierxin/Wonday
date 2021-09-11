import React from "react";


class BoardContent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: this.props.user,
            board: null
        }
    }

    componentDidMount() {
        let latestBoard;

        for (let board in this.state.user.boards) {
            if (board.id === this.state.latest_board) {
                latestBoard = board;
            }
        }

        this.setState({ board: latestBoard });
    }

    render() {
        return (
            <div>
                <p>{JSON.stringify(this.props.user)}</p><br /><br />
                <p>{this.props.board && JSON.stringify(this.props.user.board)}</p><br /><br />
            </div>
        );
    }
}


export default BoardContent;