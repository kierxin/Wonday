import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";

document.addEventListener('DOMContentLoaded', () => {

    const root = document.getElementById('root');
    let store;

    if (window.currentUser) {

        const preloadedState = {
            session: {
                id: window.currentUser.id
            },
            user: window.currentUser,
            board: window.currentBoard
        };

        store = configureStore(preloadedState);
        delete window.currentBoard;
        delete window.currentUser;

    } else {
        store = configureStore();
    }

    window.getState = store.getState;
    window.dispatch = store.dispatch;
    
    ReactDOM.render(<Root store={store}/>, root);

});