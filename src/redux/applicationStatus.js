import { createSlice } from "@reduxjs/toolkit";

export const applicationStatusSlice = createSlice({
  name: "applicationStatus",
  initialState: {
    status: false,
    count: 0
  },
  reducers: {
    makeTrue: (state) => {
      state.status = true;
    },
    makeFalse: (state) => {
      state.status = false;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { makeTrue, makeFalse } = applicationStatusSlice.actions;

export default applicationStatusSlice.reducer;
