import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./course.reducer";
import settingListReducer from './listCourse.reducer';
import userSliceReducer from './userAuth.reducer';


export const store = configureStore({
    reducer: {
        course: courseReducer,
        settingList: settingListReducer,
        userAuth: userSliceReducer
    }
})