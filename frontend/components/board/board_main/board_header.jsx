import React from "react";

import BoardNameContainer from './board_name_container';
import TextInputContainer from "./text_input_container";


class BoardHeader extends React.Component {

    constructor(props) {
        super(props);

        this.toggleAddToBoard = this.toggleAddToBoard.bind(this);
        this.toggleBoardsPeople = this.toggleBoardsPeople.bind(this);
    }

    toggleAddToBoard(e) {
        e.preventDefault();
        this.props.toggleModal("add-to-board");
    }

    toggleBoardsPeople(e) {
        e.preventDefault();
        this.props.toggleModal("boards-people");
    }

    render() {
        return(
            <div className="board-header">

                <div className="upper-board-header">
                    <BoardNameContainer />

                    <div className="upper-board-header-btns">
                        <button id="invite-to-board">
                            <img src={person} alt="icon" />
                            <p>Invite</p>
                        </button>
                        <button id="add-to-board" 
                            onClick={this.toggleAddToBoard}>
                            + Add to board
                        </button>
                        <button id="board-header-settings">
                            <img src={options} 
                                alt="click to view board's members"
                                onClick={this.toggleBoardsPeople} />
                        </button>
                    </div>
                </div>

                <TextInputContainer elementType="board" />
            </div>
        )
    }
}


export default BoardHeader;