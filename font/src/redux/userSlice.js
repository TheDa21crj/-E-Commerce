import { createSlice } from "@reduxjs/toolkit";

const wishSlice = createSlice({
    name: "wish",
    initialState: {
        start: 0,
    },
    reducers: {
        addWish: (state, action) => {
            state.start = action.payload.start;
        },
    },
});

export const { addWish } = wishSlice.actions;
export default wishSlice.reducer;