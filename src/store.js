import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from 'redux-logger';

const sessionReducer = (store = {}) => store;

const staticReducers = {
    session: sessionReducer
}

export default function configureStore() {
    const store = createStore(createReducer(), applyMiddleware(createLogger({ collapsed: true })))

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

