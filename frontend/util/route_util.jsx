import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Redirect } from 'react-router';


const Auth = ({ component: Component, path, loggedIn, exact }) => {
    return (<Route path={path}
        exact={exact}
        render={props => (
            !loggedIn ? <Component {...props} /> : <Redirect to={`/api/users/${currentUser.id}`} />
        )}
    />)
};


const mSTP = state => ({
    loggedIn: Boolean(state.session.id)
});


export const AuthRoute = withRouter(connect(mSTP, null)(Auth));