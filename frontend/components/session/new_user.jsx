import React from "react";
// import { Redirect } from "react-router";


class NewUser extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         user: user,
    //         workspace: workspace,
    //         redirect: false
    //     }
    // }

    // render() {
    //     if (this.state.redirect === true) {
    //         return (<Redirect 
    //             to={`/api/boards/${window.currentUser.boards[
    //                 Object.keys(window.currentUser.boards)[0]]}`}
    //         />)
    //     }

    //     return(
    //         <div>hi</div>
    //     )
    // }

    componentDidMount() {
        history.back();
    }

    render() {
        return <div>hiiiiiiiiii</div>
    }
}


export default NewUser;