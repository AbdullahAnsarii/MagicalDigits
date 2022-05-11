import { createSlice } from "@reduxjs/toolkit";

export const dbStatusSlice = createSlice({
  name: "dbStatus",
  initialState: {
    status: false
  },
  reducers: {
    makeTrue: (state) => {
      state.status = true;
    },
    makeFalse: (state) => {
      state.status = false;
    },
    // incrementByAmount: (state, action) => {
    //   state.count += action.payload;
    // }
  }
});

// Action creators are generated for each case reducer function
export const { makeTrue, makeFalse } = dbStatusSlice.actions;

export default dbStatusSlice.reducer;
