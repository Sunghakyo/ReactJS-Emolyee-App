import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Staffs } from './Staffs';
import { Departments } from './Departments';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            staffs: Staffs,
            depart: Departments
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}