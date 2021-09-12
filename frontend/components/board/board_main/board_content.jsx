import React from "react";


class BoardContent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: this.props.user,
            boardId: null
        }
    }

    componentDidMount() {
        // this.setState({ boardId: parseInt(this.props.match.params.boardId) })
    }

    render() {
        // console.log(this.state.boardId);
        // console.log(parseInt(this.props.match.params.boardId));

        return (
            <div>
                <p>{JSON.stringify(this.props.user)}</p><br /><br />
                <p>{JSON.stringify(this.props.board)}</p><br /><br />
                <p>{this.props.board && JSON.stringify(this.props.board.name)}</p><br /><br />
            </div>
        );
    }
}


export default BoardContent;