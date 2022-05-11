import { createSlice } from "@reduxjs/toolkit";

let initialState: boolean = false

const userSlice = createSlice({
    name: 'userAuth',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state = action.payload
            return state
        },
        deleteUser: (state, action) => {
            console.log('deleting user')
            state = action.payload
            return state
        }
    }
})


export const { addUser, deleteUser } = userSlice.actions

export default userSlice.reducer