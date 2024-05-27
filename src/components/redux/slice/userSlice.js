import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    doktors: [],
};

export const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        getDoktors: (state, actions) => {
            state.doktors = actions.payload;
        },
    },
});

export const { getDoktors } = userSlice.actions;

export default userSlice.reducer;
