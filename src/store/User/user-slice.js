import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pubId: '',
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
        setPubId: (state, { payload: pubId }) => {
            state.pubId = pubId;
        },
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