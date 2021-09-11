import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";

document.addEventListener('DOMContentLoaded', () => {

    const root = document.getElementById('root');
    let store;

    if (window.currentUser) {

        const preloadedState = {
            session: window.currentUser.id,
            entities: {
                user: window.currentUser
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;

    } else {
        store = configureStore();
    }

    window.getState = store.getState;
    window.dispatch = store.dispatch;
    
    ReactDOM.render(<Root store={store}/>, root);

});