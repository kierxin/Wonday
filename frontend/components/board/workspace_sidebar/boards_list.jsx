import React from "react";


class BoardsList extends React.Component {

    constructor(props) {
        super(props);

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
        let boards = this.props.boards;

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



