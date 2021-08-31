import * as ActionTypes from './ActionTypes';

export const Salary = (state = {
    isLoading: true,
    errMess: null,
    salary: []
}, action) => {
    switch (action.type) {
        case ActionTypes.STAFFS_LOADING:
            return { ...state, ...{ isLoading: true, errMess: null, salary: [] } };

        case ActionTypes.STAFFS_FAILED:
            return { ...state, ...{ isLoading: false, errMess: action.payload, salary: [] } };

        case ActionTypes.ADD_STAFFS:
            return { ...state, ...{ isLoading: false, errMess: null, salary: action.payload } };

        default: return state;
    }
}