import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import vaccineListSlice from "./vaccineListSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        vaccineList: vaccineListSlice
    }
})