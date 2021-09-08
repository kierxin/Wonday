import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Redirect } from 'react-router';


const Auth = ({ component: Component, path, loggedIn, exact, state }) => {
    const users = window.getState().entities.users;
    const user = users[Object.keys(users)[0]];
    let board;
    if (user) { board = user.boards[0]; };

    if (board) {
        return (<Route path={path}
            exact={exact}
            render={props => (
                !loggedIn ? <Component {...props} /> : <Redirect to={`api/boards/${board.id}`} />
            )}
        />)
    } else {
        return (<Route path={path}
            exact={exact}
            render={props => (
                !loggedIn ? <Component {...props} /> : <Redirect to={`/api/workspaces/new`} />
            )}
        />)
    }

    
};


const mSTP = state => ({
    state: state,
    loggedIn: Boolean(state.session.id)
});


export const AuthRoute = withRouter(connect(mSTP, null)(Auth));