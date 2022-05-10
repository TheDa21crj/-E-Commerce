import { configureStore } from "@reduxjs/toolkit";
import wishReducer from "./userSlice";
import toggleReducer from "./toggleNav";
import loading from "./loading";

export default configureStore({
    reducer: { wish: wishReducer, toggle: toggleReducer, load: loading },
});