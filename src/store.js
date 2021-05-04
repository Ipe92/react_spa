import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from 'redux-logger';
import promise from 'redux-promise-middleware';

const sessionReducer = (store = {}) => store;

const staticReducers = {
    session: sessionReducer
}

function configureStore() {
    const store = createStore(createReducer(), applyMiddleware(promise, createLogger({ collapsed: true })))

    store.asyncReducers = {}

    store.injectReducer = (key, asyncReducer) => {
        store.asyncReducers[key] = asyncReducer
        store.replaceReducer(createReducer(store.asyncReducers, applyMiddleware(createLogger({ collapsed: true }))))
    }
    return store;
}



function createReducer(asyncReducers) {
    return combineReducers({
        ...staticReducers,
        ...asyncReducers
    })
}

export default configureStore();