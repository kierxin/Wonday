import React from "react";


class BoardsList extends React.Component {

    constructor(props) {
        super(props);

        this.getLatestBoard = this.getLatestBoard.bind(this);
        this.deleteBoard = this.deleteBoard.bind(this);
    }

    getLatestBoard(e) {
        e.preventDefault();
        
        if(!e.currentTarget.classList.contains("ignore-fetch")) {
            this.props.getLatestBoard(`${e.currentTarget.getAttribute("dataid")}`)
            .then(action => {
                this.props.history.push(action.board.id)
            });
        }
    }

    deleteBoard(e) {
        e.preventDefault();
        this.props.deleteBoard(e.currentTarget.getAttribute("dataid"));
    }

    render() {
        let boards = this.props.user.boards;

        const boardOptions = boards.map(board => {
            return (
                <li key={`board-option-${board.id}`}>
                    <button onClick={this.getLatestBoard} dataid={board.id}>
                        {board.name}
                        <i className="far fa-trash-alt ignore-fetch"
                            onClick={this.deleteBoard}
                            dataid={board.id}></i>
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



