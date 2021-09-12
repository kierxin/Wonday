import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Redirect } from 'react-router';
import { defineBoard } from './board_api_util';


const Auth = ({ component: Component, path, loggedIn, exact }) => {
    
    if (!loggedIn) {
        return(
            <Route path={path}
                exact={exact}
                render={props => <Component {...props} />}
            />
        )
    } else {
        let board = defineBoard(getState().user);
        if (board && board.id) {
            return <Redirect to={`/api/boards/${board.id}`} />
        } else {
            return <Redirect to={`/api/`} />
        }
    }

}


const Protected = ({ component: Component, path, loggedIn, exact }) => (

    <Route path={path} exact={exact} render={props => {
        return loggedIn ? <Component {...props} /> : <Redirect to="/" />
    }} />
    
)


const mSTP = state => {
    return { 
        loggedIn: Boolean(state.session.id)
    }
};


export const AuthRoute = withRouter(connect(mSTP, null)(Auth));
export const ProtectedRoute = withRouter(connect(mSTP, null)(Protected));