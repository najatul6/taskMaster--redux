import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./features/tasks/taskSlice";

const store = configureStore({
    reducer:{
        task:taskSlice
    },
})

export default store;