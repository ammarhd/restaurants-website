import { createSlice } from "@reduxjs/toolkit";


const favoriteIDSlice = createSlice({
  name: "favoriteID",
  initialState: [],
  reducers: {
    addID: (state, { payload }) => {
      state.push(payload);
    },
    removeID: (state, { payload }) => {
      return state.filter((id) => id !== payload);
    },
  },
});

export default favoriteIDSlice.reducer;

// actions from the slices
export const { addID, removeID } = favoriteIDSlice.actions;

// A selector
export const favoriteIDSelector = (state) => state;
