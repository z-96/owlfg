import { browserHistory } from "react-router";
import { generateGroups } from "shared/mock";

// ////////////////////
// ACTION TYPES //////
// //////////////////

export const FETCH_GROUPS = "FETCH_GROUPS";
export const FETCH_GROUPS_SUCCESS = "FETCH_GROUPS_SUCCESS";
export const FETCH_GROUPS_FAIL = "FETCH_GROUPS_FAIL";
export const CREATE_GROUP = "CREATE_GROUP";
export const CREATE_GROUP_SUCCESS = "CREATE_GROUP_SUCCESS";
export const CREATE_GROUP_FAIL = "CREATE_GROUP_FAIL";

// ////////////////////
// INITIAL STATE /////
// //////////////////

export const INITIAL_STATE = {
  groups: [],
  myGroup: null,
  filters: {},
  isFetching: false,
  isEmpty: false,
  error: null,
};

// ////////////////////
// REDUCER ///////////
// //////////////////

export function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_GROUPS: {
      const groups = action.reset ? [] : state.groups;

      return {
        ...state,
        groups,
        isFetching: true,
      };
    }

    case FETCH_GROUPS_FAIL: {
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    }

    case FETCH_GROUPS_SUCCESS: {
      console.log(state.groups);
      console.log(action.groups);
      const groups = state.groups.concat(action.groups);
      console.log(groups);

      return {
        ...state,
        groups,
        isFetching: false,
        isEmpty: !!groups.length,
      };
    }

    case CREATE_GROUP: {
      return {
        ...state,
      };
    }

    case CREATE_GROUP_SUCCESS: {
      const groups = state.groups.slice(0);
      groups.unshift(action.group);

      return {
        groups: groups,
        myGroup: action.group,
        ...state,
      };
    }

    case CREATE_GROUP_FAIL: {
      return {
        ...state,
      };
    }

    default: {
      return state;
    }
  }
}

// ////////////////////
// ACTION CREATORS ///
// //////////////////

export function fetchGroups(reset, filters) {
  return (dispatch) => {
    dispatch({
      type: FETCH_GROUPS,
      reset: reset,
      filters: filters,
    });

    setTimeout(() => {
      const groups = generateGroups(10);
      dispatch({
        type: FETCH_GROUPS_SUCCESS,
        groups: groups,
      });
    }, 0);
  };
}

export function createGroup() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: CREATE_GROUP_SUCCESS,
        group: {},
      });

      browserHistory.push("/groups/new");
    }, 0);
  };
}

