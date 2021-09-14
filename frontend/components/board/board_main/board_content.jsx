import React from "react";

import BoardHeaderContainer from "./board_header_container";
import BoardBar from "./board_bar";


class BoardContent extends React.Component {

    constructor(props) {
        super(props);
    }


    componentDidMount() {
        this.props.getLatestBoard(this.props.user.latest_board, this.props.user.id);
    }

    render() {

        let groups = this.props.board.groups;

        const groupsList = groups.map(group => {
            return(
                <li key={`group-${group.id}`}
                    className={`${group.color}`}>
                    <h1>{group.title}</h1>
                </li>
            )
        })


        return (
            <section className="board-content">
                <BoardHeaderContainer />

                <BoardBar />

                <ul className="groups-main">
                    {groupsList}
                </ul>
            </section>
        );
    }
}


export default BoardContent;