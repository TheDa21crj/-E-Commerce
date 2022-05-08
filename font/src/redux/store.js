import { configureStore } from "@reduxjs/toolkit";
import wishReducer from "./userSlice";
import toggleReducer from "./toggleNav";

export default configureStore({
    reducer: { wish: wishReducer, toggle: toggleReducer },
});