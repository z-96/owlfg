import { browserHistory } from "react-router";

// ////////////////////
// ACTION TYPES //////
// //////////////////

export const AUTHENTICATE = "AUTHENTICATE";
export const AUTHENTICATE_SUCCESS = "AUTHENTICATE_SUCCESS";
export const AUTHENTICATE_FAIL = "AUTHENTICATE_FAIL";
export const UPDATE = "UPDATE";
export const UPDATE_SUCCESS = "UPDATE_SUCCESS";
export const UPDATE_FAIL = "UPDATE_FAIL";

// ////////////////////
// INITIAL STATE /////
// //////////////////

export const INITIAL_STATE = {
  user: null,
  error: null,
  isAuthenticating: false,
};

// ////////////////////
// REDUCER ///////////
// //////////////////

export function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTHENTICATE: {
      return {
        ...state,
        isAuthenticating: true,
      };
    }

    case AUTHENTICATE_SUCCESS: {
      return {
        ...state,
        user: action.user,
        isAuthenticating: false,
      };
    }

    case AUTHENTICATE_FAIL: {
      return {
        ...state,
        error: action.error,
        isAuthenticating: false,
      };
    }

    case UPDATE: {
      return {
        ...state,
        isUpdating: true,
      };
    }

    case UPDATE_SUCCESS: {
      const newUser = {
        ...state.user,
        profile: action.profile,
      };
      return {
        ...state,
        user: newUser,
        isUpdating: false,
      };
    }

    case UPDATE_FAIL: {
      return {
        ...state,
        error: action.error,
        isUpdating: false,
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

export function authenticate() {
  return (dispatch) => {
    dispatch({ type: AUTHENTICATE });

    setTimeout(() => {
      const user = {
        id: parseInt(Math.random() * 999999, 10),
        name: "PoopsMcgee",
        hash: `#${parseInt(Math.random() * 15000, 10)}`,
        profile: null,
      };

      dispatch({
        type: AUTHENTICATE_SUCCESS,
        user: user,
      });

      if (!user.profile) {
        browserHistory.push("/profile");
      }
    }, 0);
  };
}

export function update(profile) {
  return (dispatch, getState) => {
    dispatch({ type: UPDATE });

    setTimeout(() => {
      const user = getState().auth.user;

      dispatch({
        type: UPDATE_SUCCESS,
        profile: profile,
      });

      if (!user.profile) {
        browserHistory.push("/");
      }
    }, 0);
  };
}
