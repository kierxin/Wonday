import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Redirect } from 'react-router';


const Auth = ({ component: Component, path, loggedIn, latest, boardId, exact }) => {
    
    if (!loggedIn) {
        return(
            <Route path={path}
                exact={exact}
                render={props => <Component {...props} />}
            />
        )
    } else {
        if (boardId && latest !== boardId) {
            return <Redirect to={`/api/boards/${boardId}`} />
        } else if (latest) {
            return <Redirect to={`/api/boards/${latest}`} />
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
    let latest;
    const boards = state.user.boards
    if (boards && boards.length && !boards.some(board => board.id === state.user.latest_board)) {
        latest = boards[0].id;
    } else {
        latest = state.user.latest_board;
    }

    return { 
        loggedIn: Boolean(state.session.id),
        latest: latest,
        boardId: state.board.id
    }
};


export const AuthRoute = withRouter(connect(mSTP, null)(Auth));
export const ProtectedRoute = withRouter(connect(mSTP, null)(Protected));