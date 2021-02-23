import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  hasError: false,
  restaurants: [],
};

// A slice for resturants with our three reducers
const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState,
  reducers: {
    getRestaurants: (state) => {
      state.loading = true;
    },
    getRestaurantsSuccess: (state, { payload }) => {
      state.restaurants = payload;
      state.loading = false;
      state.hasError = false;
    },
    getRestaurantsFailure: (state) => {
      state.loading = false;
      state.hasError = true;
    },
  },
});

export default restaurantsSlice.reducer;

// actions from the slices
export const {
  getRestaurants,
  getRestaurantsSuccess,
  getRestaurantsFailure,
} = restaurantsSlice.actions;

// A selector
export const restaurantsSelector = (state) => state.restaurants;

// Asynchronous thunk actions
export function fetchRestaurants() {
  return async (dispatch) => {
    dispatch(getRestaurants());

    try {
      const response = await fetch("http://localhost:3000/api/list");
      const data = await response.json();

      dispatch(getRestaurantsSuccess(data));
    } catch (error) {
      dispatch(getRestaurantsFailure());
    }
  };
}
