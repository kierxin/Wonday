import React from "react";

import BoardNameContainer from './board_name_container';


class BoardHeader extends React.Component {
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
                            <img src={options} alt="click to open settings" />
                        </button>
                    </div>
                </div>

            </div>
        )
    }
}


export default BoardHeader;