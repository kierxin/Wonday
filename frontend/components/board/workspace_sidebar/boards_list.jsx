import React from "react";


class BoardsList extends React.Component {

    constructor(props) {
        super(props);

        this.getLatestBoard = this.getLatestBoard.bind(this);
    }

    getLatestBoard(e) {
        e.preventDefault();

        this.props.getLatestBoard(`${e.currentTarget.getAttribute("data-id")}`)
        .then(action => {
            this.props.history.push(action.board.id)
        });
    }

    render() {
        let boards = this.props.boards;

        const boardOptions = boards.map(board => {
            return (
                <li key={`board-option-${board.id}`}>
                    <button onClick={this.getLatestBoard} data-id={board.id}>
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



