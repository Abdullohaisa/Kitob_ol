import { createSlice } from "@reduxjs/toolkit";

const bookWorkSlice = createSlice({
  name: "bookWork",
  initialState: {
    toggle: "book",
  },
  reducers: {
    toggleBtn: (state) => {
      if (state.toggle == "book") {
        state.toggle = "work";
      } else {
        state.toggle = "book";
      }
    },
  },
});

export const { toggleBtn } = bookWorkSlice.actions;
export default bookWorkSlice.reducer;
