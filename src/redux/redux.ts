import { configureStore, createSlice } from "@reduxjs/toolkit";


const courseSlice = createSlice({
    name: 'course',
    initialState: [],
    reducers: {
        addItem: (state, action) => {

        },
        toggleItem: () => { },
        deleteItem: () => { }
    }
})

export const store = configureStore({
    reducer: {
        course: courseSlice.reducer
    }
})