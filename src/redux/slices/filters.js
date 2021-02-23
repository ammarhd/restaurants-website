import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  inputChange: "",
  sort_filter: { value: "", label: "" },
};

// A slice for resturants with our three reducers
const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    getInput: (state, { payload }) => {
      state.inputChange = payload;
    },
    getSort: (state, { payload }) => {
      if (payload != null) {
        state.sort_filter.value = payload.value;
      } else {
        state.sort_filter.value = "";
      }
    },
  },
});

export default filtersSlice.reducer;

// actions from the slices
export const { getInput, getSort } = filtersSlice.actions;

// A selector
//export const inputSelector = (state) => state.inputChange;
export const filtersSelector = (state) => state.filters;
