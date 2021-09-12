import React from "react";


class BoardContent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: this.props.user
        }
    }

    componentDidMount() {
        this.props.getLatestBoard(this.state.user.latest_board); //not sure if this is doing anything
    }

    render() {
        return (
            <div>
                <p>USER: {JSON.stringify(this.props.user)}</p><br /><br />
                <p>CURRENT BOARD: {JSON.stringify(this.props.board)}</p><br /><br />
            </div>
        );
    }
}


export default BoardContent;