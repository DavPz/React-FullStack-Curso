import { createSlice } from "@reduxjs/toolkit";

const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    isAdmin: false,
    user: undefined,
    isLoaginLoading: false,
}


export const authSlice = createSlice({
    name: 'auth',
    initialState: initialLogin,
    reducers: {

        onLogin: (state, action) => {
            state.isAuth = true;
            state.isAdmin = action.payload.isAdmin;
            state.user = action.payload.user;
            state.isLoaginLoading = false;
        },

        onLogout: (state, action) => {

            state.isAuth = false;
            state.isAdmin = false;
            state.user = undefined;
            state.isLoaginLoading = false;

        },

        onInitLogin: (state) =>{
            state.isLoaginLoading = true;
        },

    }
});

export const { onLogin, onLogout, onInitLogin } = authSlice.actions;
