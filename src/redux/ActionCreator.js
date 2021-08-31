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

// post staffs
export const postStaff = (id, name, dOB, salaryScale, startDate, department, annualLeave, overTime) => (dispatch) => {
    const newStaff = {
        id: id,
        name: name,
        dOB: dOB,
        salaryScale: salaryScale,
        startDate: startDate,
        department: department,
        annualLeave: annualLeave,
        overTime: overTime
    }

    return fetch(baseUrl + 'staffs', {
        method: 'POST',
        body: JSON.stringify(newStaff),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
        .then(response => {
            if (response) {
                var error = new Error(`${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        })
        .catch(error => {
            console.log('Post Staff', error.message);
            alert(`Your staff cant be posted Error:${error.message}`)
        })
}
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

//fetch department
export const fetchDepartments = () => (dispatch) => {
    dispatch(departLoading(true))

    return fetch(baseUrl + 'departments')
        .then(response => {
            if (response.ok) {
                return response;
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
            }
        )

        .then(response => response.json())
        .then(depart => dispatch(addDepart(depart)))
        .catch(error => dispatch(departFailed(error.message)))
}

export const departLoading = () => ({
    type: ActionTypes.DEPARTMENTS_LOADING
});

export const departFailed = (errMess) => ({
    type: ActionTypes.DEPARTMENTS_FAILED,
    payload: errMess
})

export const addDepart = (depart) => ({
    type: ActionTypes.ADD_DEPARTMENTS,
    payload: depart
});

//fetch salary
export const fetchSalary = () => dispatch => {
    dispatch(salaryLoading(true));

    return fetch(baseUrl + 'staffsSalary')
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error(`Error${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        }, error => {
            var errMess = new Error(error.message);
            throw errMess;
        })
        .then(response => response.json())
        .then(salary => dispatch(addSalary(salary)))
        .catch(error => dispatch(salaryFailed(error.message)))
};

export const salaryLoading = () => ({
    type: ActionTypes.SALARY_LOADING
});

export const salaryFailed = (errMess) => ({
    type: ActionTypes.SALARY_FAILED,
    payload: errMess
})

export const addSalary = (salary) => ({
    type: ActionTypes.ADD_SALARY,
    payload: salary
});