import { combineReducers } from "redux";
import { reducer as auth } from "ducks/auth";

export default combineReducers({
  auth,
});
