import { configureStore } from "@reduxjs/toolkit";
import userReducer from './User/user-slice'
import modelsReducer from './Joho/joho-slice'

const store = configureStore({
    reducer: {
        user: userReducer,
        models: modelsReducer,
    }
})

export default store