import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Redirect } from 'react-router';


const Auth = ({ component: Component, path, loggedIn, exact }) => {
    const board = getState().entities.board;
    
    if (!loggedIn) {
        return(
            <Route path={path}
                exact={exact}
                render={props => <Component {...props} />}
            />
        )
    } else {
        return <Redirect to={`/api/boards/${board.id}`} />
    }

}


const Protected = ({ component: Component, path, loggedIn, exact }) => {
    // debugger;
    if (loggedIn) {
        return(
            <Route path={path}
                exact={exact}
                render={props => <Component {...props} />}
            />
        )
    } else {
        return <Redirect to={`/`} />
    }
}


const mSTP = state => ({
    state: state,
    loggedIn: Boolean(state.session.id)
});


export const AuthRoute = withRouter(connect(mSTP, null)(Auth));
export const ProtectedRoute = withRouter(connect(mSTP, null)(Protected));