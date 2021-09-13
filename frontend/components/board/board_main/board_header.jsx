import React from "react";
import BoardNameContainer from "./board_name_container";


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
                        <div id="invite">
                            Invite
                        </div>
                        <button id="add-to-board">
                            Add to board
                        </button>
                        <button id="board-header-settings">
                            S
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}


export default BoardHeader;