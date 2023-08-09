import { createSlice } from "@reduxjs/toolkit";

export const inicitalUserForm = {
    id: 0,
    userName: '',
    password: '',
    email: '',
    adminRole: false,
};

const inicitalErrors = {
    userName: '',
    password: '',
    email: '',
};


export const usersSlice = createSlice({

    name: 'users',
    initialState: {
        users: [],
        userSelected: inicitalUserForm,
        visibleForm: false,
        errors: inicitalErrors,
    },
    reducers: {

        addUser: (state, action) => {
            state.users = [
                ...state.users,
                {
                    ...action.payload
                }
            ];
            state.userSelected = inicitalUserForm;
            state.visibleForm = false;
        },

        removeUser: (state, action) => {
            state.users = state.filter(i => i.id !== action.payload);
        },

        updateUserRedux: (state, action) => {
            state.users = state.users.map(u => {

                if (u.id === action.payload.id) {
                    return {
                        ...action.payload,
                        password: u.password
                    };
                }
                return u;
            });
            state.userSelected = inicitalUserForm;
            state.visibleForm = false;
        },

        loadingUsers: (state, {payload}) => {
            state.users = payload;
        },

        onUserSelectedForm: (state, {payload}) => {
            state.userSelected = payload;
            state.visibleForm = true;
        },

        onOpenForm: (state) => {
            state.visibleForm = true;
        },

        onCloseForm: (state) => {
            state.visibleForm = false;
            state.userSelected = inicitalUserForm;
        },

        loadingError: (state, {payload}) => {
            state.errors = payload;
        },
    }

});

export const {
    addUser,
    removeUser,
    updateUserRedux,
    loadingUsers,
    onUserSelectedForm,
    onOpenForm,
    onCloseForm,
    loadingError,
} = usersSlice.actions;