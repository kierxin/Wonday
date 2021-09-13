import React from "react";
import BoardHeaderContainer from "./board_header_container";


class BoardContent extends React.Component {

    constructor(props) {
        super(props);
    }


    componentDidMount() {
        this.props.getLatestBoard(this.props.user.latest_board);
    }

    componentWillUnmount() {
        console.log("UNMOUNT");
    }

    render() {
        let groups = "";
        if(this.props.board) {
            groups = JSON.stringify(this.props.board.groups)
        }


        return (
            <section className="board-content">
                <BoardHeaderContainer />
                <div>
                    <p>USER: {JSON.stringify(this.props.user)}</p><br /><br />
                    <p>CURRENT BOARD: {JSON.stringify(this.props.board)}</p><br /><br />
                    <p>GROUPS: {groups}</p><br /><br />
                </div>
            </section>
        );
    }
}


export default BoardContent;