import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "taskSlice",
  initialState: {
    tasks: [],
  },
  reducers: {},
});

export default taskSlice.reducer;