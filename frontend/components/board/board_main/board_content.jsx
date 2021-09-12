import React from "react";


class BoardContent extends React.Component {

    constructor(props) {
        super(props);
    }


    componentDidMount() {
        this.props.getLatestBoard(this.props.user.latest_board)
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