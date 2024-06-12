import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "taskSlice",
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask:(state,{payload})=>{
      state.tasks.push(payload)
    }
  },
});

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;