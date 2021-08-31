import * as ActionTypes from './ActionTypes';
import { baseUrl } from './BaseUrl';

export const fetchStaffs = () => (dispatch) => {
    dispatch(staffsLoading(true));

    return fetch(baseUrl + 'staffs')
        .then(response => {
            if (response.ok) {
                return response
            }
            else {
                var error = new Error(`Error${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(staffs => dispatch(addStaffs(staffs)))
        .catch(error => dispatch(staffsFailed(error.message)))
};

export const staffsLoading = () => ({
    type: ActionTypes.STAFFS_LOADING,
});

export const staffsFailed = (errMess) => ({
    type: ActionTypes.STAFFS_FAILED,
    payload: errMess
});

export const addStaffs = (staffs) => ({
    type: ActionTypes.ADD_STAFFS,
    payload: staffs
});