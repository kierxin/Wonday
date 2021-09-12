import React from "react";
import { Link } from "react-router-dom";


const BoardsList = props => {
    let boards = props.user.boards;
    for (let board in props.user.boards) {
        if (board.id && board.name) {
            boards.push(props.user.boards[board])
        }
    }

    console.log(boards);

    const boardOptions = boards.map(board => {
        return (
            <li key={`board-option-${board.id}`}>
                <Link to={`/api/boards/${board.id}`}>
                    {board.name}
                </Link>
            </li>
        )
    });

    return(
        <ul id="boards-list">
            {boardOptions}
        </ul>
    );

}


export default BoardsList;



