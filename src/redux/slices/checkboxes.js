import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  checked: {
    checkedP3: false,
    checkedP2: false,
    checkedP1: false,
    checkedR5: false,
    checkedR4: false,
    checkedR3: false,
  },
};


const checkboxesSlice = createSlice({
  name: "checkboxes",
  initialState,
  reducers: {
    getSelected: (state, { payload }) => {
      state.checked = payload;
    },
  },
});

export default checkboxesSlice.reducer;

// actions from the slices
export const { getSelected } = checkboxesSlice.actions;

// A selector
//export const inputSelector = (state) => state.inputChange;
export const checkboxesSelector = (state) => state.checkboxes;
