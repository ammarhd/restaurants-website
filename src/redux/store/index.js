import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../slices";
import { persistStore } from "redux-persist";

export const store = configureStore({
  reducer: rootReducer,
});

export const persistor = persistStore(store);

export default { store, persistor };
