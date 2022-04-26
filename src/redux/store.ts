import { configureStore } from "@reduxjs/toolkit";
import courseReducer from './redux';


export const store = configureStore({
    reducer: {
        course: courseReducer
    }
})