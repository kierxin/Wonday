import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Redirect } from 'react-router';


const Auth = ({ component: Component, path, loggedIn, exact }) => {
    const users = window.getState().entities.users;
    const user = users[Object.keys(users)[0]];
    
    if (!loggedIn) {
        return(
            <Route path={path}
                exact={exact}
                render={props => <Component {...props} />}
            />
        )
    } else {
        if (!user.boards.length) {
            return <Redirect to={`/api/`} />
        } else {
            return <Redirect to={`/api/boards/${user.boards[0].id}`} />
        }
    }

}


const mSTP = state => ({
    state: state,
    loggedIn: Boolean(state.session.id)
});


export const AuthRoute = withRouter(connect(mSTP, null)(Auth));