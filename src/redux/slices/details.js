import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  info: { opening_hours: [] },
};


const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    getInfo: (state) => {
      state.loading = true;
    },
    getInfoSuccess: (state, { payload }) => {
      state.info = payload;
      state.loading = false;
      state.hasError = false;
    },
    getInfoFailure: (state) => {
      state.loading = false;
      state.hasError = true;
    },
  },
});

export default infoSlice.reducer;

// actions from the slices
export const { getInfo, getInfoSuccess, getInfoFailure } = infoSlice.actions;

// A selector
export const infoSelector = (state) => state.info;

// Asynchronous thunk actions
export function fetchInfo(id) {
  return async (dispatch) => {
    dispatch(getInfo());

    try {
      const response = await fetch(
        `http://localhost:3000/api/restaurant/${id}`
      );
      const data = await response.json();

      dispatch(getInfoSuccess(data));
    } catch (error) {
      dispatch(getInfoFailure());
    }
  };
}
