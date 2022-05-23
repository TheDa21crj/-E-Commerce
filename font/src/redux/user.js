import { createSlice } from "@reduxjs/toolkit";

const userDataSlice = createSlice({
    name: "userData",
    initialState: {
        _id: "",
        email: "",
        imgSrc: "",
        firstName: "",
        LastName: "",
        gender: "",
        PhoneNumber: "",
    },
    reducers: {
        adduser: (state, action) => {
            state._id = action.payload._id;
            state.email = action.payload.email;
            state.imgSrc = action.payload.imgSrc;
            state.firstName = action.payload.firstName;
            state.LastName = action.payload.LastName;
            state.gender = action.payload.gender;
            state.PhoneNumber = action.payload.PhoneNumber;
        },
    },
});

export const { adduser } = userDataSlice.actions;
export default userDataSlice.reducer;