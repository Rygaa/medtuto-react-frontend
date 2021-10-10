import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: '',
    idToken: '',
    isConnected: null,
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
    }
})

export const userActions = userSlice.actions;
export default userSlice.reducer;