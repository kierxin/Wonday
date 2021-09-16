import React from "react";

import BoardNameContainer from './board_name_container';


class BoardHeader extends React.Component {

    constructor(props) {
        super(props);

        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal(e) {
        e.preventDefault();
        this.props.toggleModal("boards-people");
    }

    render() {
        return(
            <div className="board-header">

                <div className="upper-board-header">
                    <BoardNameContainer />

                    <div className="upper-board-header-btns">
                        <div id="last-seen">
                            Last Seen
                        </div>
                        <button id="invite-to-board">
                            <img src={person} alt="icon" />
                            <p>Invite</p>
                        </button>
                        <button id="add-to-board">
                            + Add to board
                        </button>
                        <button id="board-header-settings">
                            <img src={options} 
                                alt="click to view board's members"
                                onClick={this.toggleModal} />
                        </button>
                    </div>
                </div>

            </div>
        )
    }
}


export default BoardHeader;