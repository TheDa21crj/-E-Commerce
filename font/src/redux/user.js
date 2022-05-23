import { createSlice } from "@reduxjs/toolkit";

const userDataSlice = createSlice({
    name: "userData",
    initialState: {
        newArrival: [],
        topselling: [],
    },
    reducers: {
        adduser: (state, action) => {
            state.newArrival = action.payload.newArrival;
            state.topselling = action.payload.topselling;
        },
    },
});

export const { adduser } = userDataSlice.actions;
export default userDataSlice.reducer;