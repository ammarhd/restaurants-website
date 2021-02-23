import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import restaurantsReducer from "./restaurants";
import infoReducer from "./details";
import filtersReducer from "./filters";
import favoriteIDReducer from "./favorites";
import checkboxesReducer from "./checkboxes";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favoriteID"],
};

const rootReducer = combineReducers({
  restaurants: restaurantsReducer,
  info: infoReducer,
  filters: filtersReducer,
  favoriteID: favoriteIDReducer,
  checkboxes: checkboxesReducer,
});

export default persistReducer(persistConfig, rootReducer);
