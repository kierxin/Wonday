import React from "react";
import { Redirect } from "react-router";


class NewUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: props.user,
            workspaces: props.workspaces,
            placeholder: "hi"
        }
    }

    componentDidMount() {
        console.log(this.state.user);
        this.props.createWorkspace(this.state.user.id)
        .then(<Redirect to={`/api/users/${this.state.user.id}`} />)
    }

    render() {
        return(
            <div><p>{JSON.stringify(this.state.user)}</p>
                <p>{JSON.stringify(this.state.workspaces)}</p></div>
        )
    }

}


export default NewUser;