import { configureStore } from "@reduxjs/toolkit";
import wishReducer from "./userSlice";

export default configureStore({
    reducer: { wish: wishReducer },
});