import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state, action) => {
            state.user = null;
        },
    },

    extraReducers: (builder) => {
        // builder
        //     .addCase(incrementAsync.pending, (state) => {
        //         state.status = "loading";
        //     })
        //     .addCase(incrementAsync.fulfilled, (state, action) => {
        //         state.status = "idle";
        //         state.value += action.payload;
        //     });
    },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
