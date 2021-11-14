import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: '',
    idToken: '',
    isConnected: null,
    email: null,
    isTeacher: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsername: (state, { payload: username }) => {
            state.username = username;
        },
        setIsConnected: (state, { payload: status }) => {
            state.isConnected = status;
        },
        setIdToken: (state, { payload: idToken }) => {
            state.idToken = idToken;
            localStorage.setItem('idToken', idToken)
        },
        setEmail: (state, { payload: email }) => {
            state.email = email;
        },
        setIsTeacher: (state, { payload: status }) => {
            state.isTeacher = status;
        },
    }
})

export const userActions = userSlice.actions;
export default userSlice.reducer;