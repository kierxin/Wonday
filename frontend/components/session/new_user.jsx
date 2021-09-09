import React from "react";


class NewUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: props.user
        }
    }

    componentDidMount() {
        this.state.user.workspace_id ? (
            this.props.fetchBoard(this.state.user.id)
        ) : (
            this.props.createWorkspace(this.state.user.id)
        );
    }

    render() {
        return(
            <div>{JSON.stringify(this.state.user)}</div>
        )
    }

}


export default NewUser;