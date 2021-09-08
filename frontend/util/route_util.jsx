import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Redirect } from 'react-router';


const Auth = ({ component: Component, path, loggedIn, exact, state }) => {
    const users = window.getState().entities.users;
    const user = users[Object.keys(users)[0]];
    const board = user.boards[0];
    if (user) {console.log(user.boards); console.log(user)};

    return (<Route path={path}
        exact={exact}
        render={props => (
            !loggedIn ? <Component {...props} /> : <Redirect to={`api/boards/${board.id}`} />
        )}
    />)
};


const mSTP = state => ({
    state: state,
    loggedIn: Boolean(state.session.id)
});


export const AuthRoute = withRouter(connect(mSTP, null)(Auth));