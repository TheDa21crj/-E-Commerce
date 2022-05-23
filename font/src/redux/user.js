import { createSlice } from "@reduxjs/toolkit";

const sellingSlice = createSlice({
    name: "selling",
    initialState: {
        newArrival: [],
        topselling: [],
    },
    reducers: {
        addselling: (state, action) => {
            state.newArrival = action.payload.newArrival;
            state.topselling = action.payload.topselling;
        },
    },
});

export const { addselling } = sellingSlice.actions;
export default sellingSlice.reducer;