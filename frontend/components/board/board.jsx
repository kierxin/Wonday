import React from "react";


class Board extends React.Component {



    render() {
        return(
            <div>Welcome to your board, {this.props.user.email}!</div>
        )
    }

}


export default Board;