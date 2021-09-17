import React from "react";

import BoardHeaderContainer from "./board_header_container";
import BoardBarContainer from "./board_bar_container";
import GroupContainer from "../groups/group_container";


class BoardContent extends React.Component {

    constructor(props) {
        super(props);
    }


    componentDidMount() {
        this.props.getLatestBoard(this.props.user.latest_board, this.props.user.id);
    }

    render() {
        const groups = this.props.board.groups;
        
        const groupsList = groups.map(group => {
            return(
                <GroupContainer id={group.id} key={`extra-${group.id}`} />
            )
        });


        return (
            <section className="board-content">
                <BoardHeaderContainer />

                <BoardBarContainer />

                <ul className="groups-main">
                    {groupsList}
                </ul>
            </section>
        );
    }
}


export default BoardContent;