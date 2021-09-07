import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";

document.addEventListener('DOMContentLoaded', () => {

    const root = document.getElementById('root');
    let store;

    if (window.current_user) {

        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        }
        store = configureStore(preloadedState);
        delete window.current_user;

    } else {
        store = configureStore();
    }

    window.getState = store.getState;
    window.dispatch = store.dispatch;
    
    ReactDOM.render(<Root store={store}/>, root);

});