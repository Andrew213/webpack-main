
import "./scss/style.scss"
import "./index.html";
import React from 'react';
import { render } from 'react-dom';
import App from './js/App.jsx';
import { compose, createStore } from "redux";
import { rootReducer } from "./redux/rootReducer";
import { Provider } from "react-redux";
import { loadState, saveState } from "./redux/localStorage";

const persistedState = loadState()

const store = createStore(
    rootReducer, persistedState, compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

store.subscribe(() => {
    saveState(store.getState())
})

// console.log(saveState(store.getState()))
const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

render(
    <React.StrictMode>
        {app}
    </React.StrictMode>,
    document.getElementById('root')
)


