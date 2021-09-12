import React from "react";
import { Link } from "react-router-dom";


const BoardsList = props => {

    const boardOptions = props.user.boards.map(board => {
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



