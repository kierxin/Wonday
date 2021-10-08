import React from "react";

import BoardHeaderContainer from "./board_header_container";
import BoardBarContainer from "./board_bar_container";
import GroupContainer from "../groups/group_container";


class BoardContent extends React.Component {

    constructor(props) {
        super(props);
    }

// not working as intended and seems to cause a lot of flickering between boards:
    // componentDidMount() {
    //     this.props.getLatestBoard(this.props.user.latest_board, this.props.user.id);
    // }

    render() {
        let groups = this.props.board.groups;
        const filter = this.props.filter;
        const filterType = this.props.filterType;
        
        if (filter === "true" && filterType === "search") {
            groups = groups;
        } else if (filter && filterType === "person") {
            groups = groups.filter(group => {
                return group.tasks.some(task => {
                    return task.people.includes(filter);
                });
            })
        } else if (filter && filterType === "search") {
            groups = groups.filter(group => {
                return group.tasks.some(task => {
                    return task.title.toLowerCase().includes(filter.toLowerCase()) || (
                        task.status && task.status.toLowerCase().includes(filter.toLowerCase())
                    );
                });
            });
        }
        
        let groupsList;
        if (groups.length > 0) {
            groupsList = groups.map(group => {
                return (
                    <GroupContainer id={group.id} key={`extra-${group.id}`} />
                )
            });
        } else if (this.props.board.groups.length === 0) {
            groupsList = <div className="add-group-prompt">
                <i className="fas fa-arrow-up"></i> Welcome! Click the "Add Group" button to get started.
                <p><i className="fas fa-arrow-left"></i> Or, create/view other boards.</p>
            </div>;
        } else {
            groupsList = <div>No matching results</div>
        }


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