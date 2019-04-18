import { combineReducers } from "redux";
import users from "./searchReducer";
import stars from "./starsReducer";
import user from "./userReduser";

const rootReducer = combineReducers({
  users,
  stars,
  user
});
export default rootReducer;
