import { STAFFS, DEPARTMENTS } from "../components/Staffs";

export const initialState = {
    staffs: STAFFS,
    departments: DEPARTMENTS
}

export const Reducer = (state = initialState, action) => {
    return state;
}