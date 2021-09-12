import React from "react";
import { Link } from "react-router-dom";


class BoardsList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            boards: Object.values(props.user.boards)
        }

        this.switchBoards = this.switchBoards.bind(this);
    }

    switchBoards(e) {
        e.preventDefault();

        this.props.switchBoards(`${e.currentTarget.getAttribute("data-id")}`)
        .then(action => {
            this.props.history.push(action.board.id)
        });
    }

    render() {
        let boards = this.state.boards;

        const boardOptions = boards.map(board => {
            return (
                <li key={`board-option-${board.id}`}>
                    <button onClick={this.switchBoards} data-id={board.id}>
                        {board.name}
                    </button>
                </li>
            )
        });

        return (
            <ul id="boards-list">
                {boardOptions}
            </ul>
        );

    }

}

export default BoardsList;



