import React from "react";
import { Link } from "react-router-dom";


class BoardsList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            boards: props.user.boards
        }
    }

    componentDidMount() {
        this.props.viewBoards();
    }

    render() {

        let boards = this.state.boards;
        for (let board in boards) {
            if (board.id && board.name) {
                boards.push(board)
            }
        }

        const boardOptions = boards.map(board => {
            return (
                <li key={`board-option-${board.id}`}>
                    <Link to={`/api/boards/${board.id}`}>
                        {board.name}
                    </Link>
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



