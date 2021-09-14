import React from "react";


class AddGroupBtn extends React.Component {

    constructor(props) {
        super(props);

        this.createGroup = this.createGroup.bind(this);
    }

    createGroup(e) {
        e.preventDefault();
        this.props.createNewGroup(this.props.boardId);
    }

    render() {
        return (
            <button id="add-group-btn"
                onClick={this.createGroup}>
                Add Group
            </button>
        )
    }

}


export default AddGroupBtn;