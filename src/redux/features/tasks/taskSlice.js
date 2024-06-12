import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "taskSlice",
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask:(state,{payload})=>{
      if(state.tasks.length=== 0){

        state.tasks.push({id:1,...payload})
        }else{
          const lastElement = state.tasks.at(-1)
          state.tasks.push({id:lastElement.id + 1,...payload})
        }
    }
  },
});

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;