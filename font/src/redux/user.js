import { createSlice } from "@reduxjs/toolkit";

const userDataSlice = createSlice({
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

export const { addselling } = userDataSlice.actions;
export default userDataSlice.reducer;