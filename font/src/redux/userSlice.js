import { createSlice } from "@reduxjs/toolkit";

const wishSlice = createSlice({
    name: "wish",
    initialState: {
        number: 10,
    },
    reducers: {
        addWish: (state, action) => {
            state.number += 1;
        },
    },
});

export const { addWish } = wishSlice.actions;
export default wishSlice.reducer;