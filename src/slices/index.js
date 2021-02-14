import { combineReducers } from "redux";

import restaurantsReducer from "./restaurants";

const rootReducer = combineReducers({
  restaurants: restaurantsReducer,
});

export default rootReducer;
