import * as ActionTypes from "./ActionTypes";

export const staffsDepart = (
  state = {
    isLoading: true,
    errMess: null,
    staffsDepart: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.STAFFS_DEPART_LOADING:
      return {
        ...state,
        ...{ isLoading: true, errMess: null, staffsDepart: [] },
      };

    case ActionTypes.STAFFS_DEPART:
      return {
        ...state,
        ...{ isLoading: false, errMess: null, staffsDepart: action.payload },
      };

    case ActionTypes.STAFFS_DEPART_FAILED:
      return {
        ...state,
        ...{ isLoading: false, errMess: action.payload, staffsDepart: [] },
      };

    default:
      return state;
  }
};
