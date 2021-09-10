import React from "react";


class BoardsList extends React.Component {


    render() {
        console.log(this.props);
        // for each board belonging to current user, add <li>

        return(
            <ul id="boards-list">

            </ul>
        )
    }

}


export default BoardsList;