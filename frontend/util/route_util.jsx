import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Redirect } from 'react-router';


const Auth = ({ component: Component, path, loggedIn, exact, state }) => {
    // const boardId = window.currentUser.boards[0];
    console.log(window.getState().entities.users["1"]);

    const id = window.getState().session.id;
    return (<Route path={path}
        exact={exact}
        render={props => (
            !loggedIn ? <Component {...props} /> : <Redirect to={`api/users/${id}`} />
        )}
    />)
};


const mSTP = state => ({
    state: state,
    loggedIn: Boolean(state.session.id)
});


export const AuthRoute = withRouter(connect(mSTP, null)(Auth));