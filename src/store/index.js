import { configureStore } from "@reduxjs/toolkit";
import userReducer from './user-slice'
import modelsReducer from './models-slice'

const store = configureStore({
    reducer: {
        user: userReducer,
        models: modelsReducer,
    }
})

export default store