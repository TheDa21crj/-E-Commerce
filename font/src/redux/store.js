import { configureStore } from "@reduxjs/toolkit";
import wishReducer from "./userSlice";
import toggleReducer from "./toggleNav";
import loading from "./loading";
import sellingReducer from "./selling";

export default configureStore({
    reducer: {
        wish: wishReducer,
        toggle: toggleReducer,
        load: loading,
        selling: sellingReducer,
    },
});