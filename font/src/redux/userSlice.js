import { createSlice } from "@reduxjs/toolkit";

const wishSlice = createSlice({
    name: "wish",
    initialState: {
        lenght: 0,
        data: [],
    },
    reducers: {
        addWish: (state, action) => {
            state.lenght = action.payload.start;
            state.data = action.payload.data;
        },
    },
});

export const { addWish } = wishSlice.actions;
export default wishSlice.reducer;