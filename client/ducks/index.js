import { combineReducers } from "redux";
import { reducer as auth } from "ducks/auth";
import { reducer as groups } from "ducks/groups";

export default combineReducers({
  auth,
  groups,
});
