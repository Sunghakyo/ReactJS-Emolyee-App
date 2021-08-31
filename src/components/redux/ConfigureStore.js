import { createStore, applyMiddleware } from 'redux';
import { Staffs } from './Staffs';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore({
        staffs: Staffs
    },
        applyMiddleware(thunk, logger))

    return store;
}